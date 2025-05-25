import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class VoicedataService {
  private readonly whisperPath = path.resolve('./whisper.cpp/build/bin/whisper-cli'); // Chemin vers le binaire de Whisper
  private readonly modelPath = path.resolve('./whisper.cpp/models/ggml-base.en.bin'); // Chemin vers le modèle utilisé par Whisper

  // Transcrire un fichier audio en texte
  async transcribeAudio(filePath: string): Promise<string> {
    const outputFile = filePath.replace(/\.[^/.]+$/, ''); // Retirer l'extension

    const command = `${this.whisperPath} -m ${this.modelPath} -f ${filePath} -otxt -of ${outputFile}`; // Commande à exécuter avec Whisper

    try {
      // Exécuter Whisper pour générer la transcription
      await execAsync(command);

      // Lire le fichier généré .txt qui contient la transcription
      const transcription = await fs.readFile(`${outputFile}.txt`, 'utf-8');
      return transcription.trim();
    } catch (err) {
      console.error('Erreur Whisper.cpp:', err);
      return 'Erreur de transcription';
    }
  }

  // Méthode BLEU pour comparer la transcription et le texte attendu
  private computeBLEU(reference: string[], hypothesis: string[]): number {
    const refCounts = new Map<string, number>();
    const hypCounts = new Map<string, number>();

    // Comptage des mots dans la référence (texte attendu)
    for (const word of reference) {
      refCounts.set(word, (refCounts.get(word) || 0) + 1);
    }

    let matchCount = 0;
    // Comparer les mots de la transcription à ceux de la référence
    for (const word of hypothesis) {
      if ((refCounts.get(word) || 0) > 0) {
        matchCount++;
        refCounts.set(word, refCounts.get(word)! - 1);
      }
    }

    const precision = hypothesis.length === 0 ? 0 : matchCount / hypothesis.length; // Précision
    return precision;
  }

  // Scorer la transcription en la comparant au texte attendu
  async scoreTranscription(transcribed: string, expected: string): Promise<{ score: number, feedback: string }> {
    const clean = (text: string): string[] =>
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')  // Nettoyage du texte (enlever ponctuation, majuscules)
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ');

    const reference = clean(expected); // Texte attendu
    const hypothesis = clean(transcribed); // Transcription générée par Whisper

    const bleuScore = this.computeBLEU(reference, hypothesis);
    const score = Math.round(bleuScore * 100); // Calcul du score en pourcentage

    let feedback = '';
    if (score >= 90) {
      feedback = 'Excellent ! La transcription est presque parfaite.';
    } else if (score >= 70) {
      feedback = 'Très bon travail. Quelques différences mineures.';
    } else if (score >= 50) {
      feedback = 'Correct. Mais il y a plusieurs écarts significatifs.';
    } else {
      feedback = 'La transcription est loin du texte attendu. À améliorer.';
    }

    return { score, feedback }; // Retourner le score et le feedback
  }
}
