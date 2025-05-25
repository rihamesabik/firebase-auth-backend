import { Controller, Post, Body, Get } from '@nestjs/common';
import { LeitnerService } from './leitner.service';

@Controller('leitner')
export class LeitnerController {
  constructor(private readonly leitnerService: LeitnerService) {}

  // Endpoint pour enregistrer une review
  @Post('save-review')
  reviewCard(@Body() body: { cardId: number; isCorrect: boolean }) {
    if (typeof body.cardId !== 'number' || typeof body.isCorrect !== 'boolean') {
      return { error: 'Invalid data format' };
    }
    const reviewData = {
      cardId: body.cardId,
      isCorrect: body.isCorrect,
      timestamp: new Date().toISOString(),
    };
    this.leitnerService.saveReview(reviewData);
    return { message: 'Review saved successfully', reviewData };
  }

  // Endpoint pour récupérer toutes les reviews
  @Get('reviews')
  getAllReviews() {
    return this.leitnerService.getAllReviews();
  }
}
