import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { WhisperService } from './whisper-cpp.service';
import * as path from 'path';
import { File as MulterFile } from 'multer'; // ✅ Import correct du type

@Controller('whisper')
export class WhisperController {
  constructor(private readonly whisperService: WhisperService) {}

  @Post('transcribe-and-score')
  @UseInterceptors(
    FileInterceptor('audio', {
      storage: diskStorage({
        destination: './uploads/audio',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async transcribeAndScore(
    @UploadedFile() file: MulterFile, // ✅ Type corrigé ici
    @Body('expected') expected: string,
  ) {
    const filePath = path.resolve(file.path);

    // Appel au service pour obtenir la transcription
    const transcription = await this.whisperService.transcribeAudio(filePath);

    // Appel au service pour obtenir le score
    const { score, feedback } = await this.whisperService.scoreTranscription(transcription, expected);

    // Vérification que le score est un nombre avant de l'utiliser
    const scoreWithPercentage = `${score}%`;

    return {
      transcription,
      expected,
      score: scoreWithPercentage, // Formater le score en pourcentage
      feedback, // Vous pouvez aussi renvoyer les commentaires
    };
  }
}
