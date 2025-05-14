import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Lecon } from '../lecon/lecon.entity';
import { Parcours } from '../parcours/parcours.entity'; // Import de Parcours
import { ParcoursModule } from '../parcours/parcours.module'; // Import du module Parcours
@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Lecon,Parcours]), ParcoursModule],
  // Charger aussi le modèle Parcours
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
