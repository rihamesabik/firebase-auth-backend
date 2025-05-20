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
}
