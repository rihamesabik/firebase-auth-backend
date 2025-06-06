import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class WhisperService {
  private readonly whisperPath = path.resolve('./whisper.cpp/build/bin/whisper-cli');
  private readonly modelPath = path.resolve('./whisper.cpp/models/ggml-base.en.bin');

  async transcribeAudio(filePath: string): Promise<string> {
    const outputFile = filePath.replace(/\.[^/.]+$/, ''); // remove extension

    const command = `${this.whisperPath} -m ${this.modelPath} -f ${filePath} -otxt -of ${outputFile}`;

    try {
      // Exécution de whisper.cpp en ligne de commande
      await execAsync(command);

      // Lire le fichier généré .txt
      const transcription = await fs.readFile(`${outputFile}.txt`, 'utf-8');
      return transcription.trim();
    } catch (err) {
      console.error('Erreur Whisper.cpp:', err);
      return 'Erreur de transcription';
    }
  }

  private computeBLEU(reference: string[], hypothesis: string[]): number {
    const refCounts = new Map<string, number>();
    const hypCounts = new Map<string, number>();

    for (const word of reference) {
      refCounts.set(word, (refCounts.get(word) || 0) + 1);
    }

    let matchCount = 0;
    for (const word of hypothesis) {
      if ((refCounts.get(word) || 0) > 0) {
        matchCount++;
        refCounts.set(word, refCounts.get(word)! - 1);
      }
    }

    const precision = hypothesis.length === 0 ? 0 : matchCount / hypothesis.length;
    return precision;
  }

  async scoreTranscription(transcribed: string, expected: string): Promise<{ score: number, feedback: string }> {
    const clean = (text: string): string[] =>
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ');

    const reference = clean(expected);
    const hypothesis = clean(transcribed);

    const bleuScore = this.computeBLEU(reference, hypothesis);
    const score = Math.round(bleuScore * 100);

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

    return { score, feedback };
  }
}
