import { Controller, Post, UploadedFile, Body, UseInterceptors , Get} from '@nestjs/common';
import { LeitnerService } from './leitner.service';
import { WhisperService } from '../whisper/whisper-cpp.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { diskStorage } from 'multer';
import { File as MulterFile } from 'multer';

@Controller('leitner')
export class LeitnerController {
  constructor(
    private readonly leitnerService: LeitnerService,
    private readonly whisperService: WhisperService,
  ) {}

  // Ajouter une carte à partir de la transcription de l'audio
  @Post('add-card-from-audio')
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
  async addCardFromAudio(@UploadedFile() file: MulterFile) {
    const filePath = path.resolve(file.path);
    const transcription = await this.whisperService.transcribeAudio(filePath);

    // Ajouter la transcription comme une carte de révision
    this.leitnerService.addCard(transcription, transcription);

    return { message: 'Carte ajoutée avec succès', transcription };
  }

  // Réviser une carte
  @Post('review-card')
  reviewCard(@Body() body: { cardIndex: number; isCorrect: boolean }) {
    this.leitnerService.reviewCard(body.cardIndex, body.isCorrect);
    return { message: 'Carte révisée avec succès' };
  }

  // Obtenir les cartes à réviser
  @Get('cards-to-review')
  getCardsToReview() {
    return this.leitnerService.getCardsToReview();
  }
}
