import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { WhisperService } from '../whisper/whisper-cpp.service';
import * as fs from 'fs/promises';
import * as path from 'path';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly whisperService: WhisperService,  // injecte WhisperService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any) {
    // 1. Upload vers Cloudinary
    const uploadResult = await this.uploadService.uploadToCloudinary(file);

    // 2. Sauvegarder temporairement le buffer dans un fichier local
    const tempDir = path.join(__dirname, '..', 'tmp');
    await fs.mkdir(tempDir, { recursive: true }); // crée tmp si inexistant

    const filename = `audio-${Date.now()}.${file.originalname.split('.').pop()}`;
    const tempFilePath = path.join(tempDir, filename);

    await fs.writeFile(tempFilePath, file.buffer);

    // 3. Transcrire le fichier temporaire avec Whisper
    const transcription = await this.whisperService.transcribeAudio(tempFilePath);

    // 4. Supprimer le fichier temporaire après usage
    await fs.unlink(tempFilePath);

    // 5. Retourner le résultat complet
    return {
      cloudinary: uploadResult,
      transcription,
    };
  }
}
