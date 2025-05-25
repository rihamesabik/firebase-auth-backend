import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { VoicedataService } from './voicedata.service'; // Service qui fait la transcription et le scoring
import * as path from 'path';
import { File as MulterFile } from 'multer'; // ✅ Import correct du type

@Controller('voicedata') // Nouveau endpoint
export class VoicedataController {
  constructor(private readonly voicedataService: VoicedataService) {}

  @Post('process') // Endpoint pour traiter le fichier audio
  @UseInterceptors(
    FileInterceptor('audio', { // Recevoir un fichier avec le champ 'audio'
      storage: diskStorage({
        destination: './uploads/audio', // Dossier où le fichier audio sera sauvegardé
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName); // Nom unique pour le fichier
        },
      }),
    }),
  )
  async processVoicedata(
    @UploadedFile() file: MulterFile, // Le fichier audio téléchargé
    @Body('expected') expected: string, // Le texte attendu pour la comparaison
  ) {
    const filePath = path.resolve(file.path);

    // Appel au service pour transcrire le fichier audio
    const transcription = await this.voicedataService.transcribeAudio(filePath);
    
    // Appel au service pour scorer la transcription en la comparant avec le texte attendu
    const { score, feedback } = await this.voicedataService.scoreTranscription(transcription, expected);

    // Retourner la transcription et le score
    return {
      transcription,
      expected,
      score: `${score}%`,
      feedback,
    };
  }
}
