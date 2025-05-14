import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Lecon } from '../lecon/lecon.entity';
import { Parcours } from '../parcours/parcours.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
    @InjectRepository(Lecon)
    private leconRepository: Repository<Lecon>,
    @InjectRepository(Parcours)
    private parcoursRepository: Repository<Parcours>,
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    // Vérification de la Leçon
    const leconId = Number(createQuizDto.leconId);
    if (isNaN(leconId)) {
      throw new BadRequestException('Invalid leconId');
    }

    const lecon = await this.leconRepository.findOne({
      where: { id: leconId },
    });

    if (!lecon) {
      throw new NotFoundException('Leçon not found');
    }

    // Vérification du Parcours
    const parcoursId = Number(createQuizDto.parcoursId);
    if (isNaN(parcoursId)) {
      throw new BadRequestException('Invalid parcoursId');
    }

    const parcours = await this.parcoursRepository.findOne({
      where: { id: parcoursId },
    });

    if (!parcours) {
      throw new NotFoundException('Parcours not found');
    }

    // Création du quiz avec les relations Leçon et Parcours
    const quiz = this.quizRepository.create({
      question: createQuizDto.question,
      propositions: createQuizDto.propositions,
      bonneReponse: createQuizDto.bonneReponse,
      lecon: lecon,
      parcours: parcours,
    });

    return this.quizRepository.save(quiz);
  }

  async findAll(): Promise<Quiz[]> {
    return this.quizRepository.find({ relations: ['lecon', 'parcours'] }); // Charger les relations
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['lecon', 'parcours'], // Charger les relations
    });

    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }

    return quiz;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.findOne(id);

    if (updateQuizDto.question !== undefined) {
      quiz.question = updateQuizDto.question;
    }

    if (updateQuizDto.propositions !== undefined) {
      quiz.propositions = updateQuizDto.propositions;
    }

    if (updateQuizDto.bonneReponse !== undefined) {
      quiz.bonneReponse = updateQuizDto.bonneReponse;
    }

    if (updateQuizDto.leconId !== undefined) {
      const leconId = Number(updateQuizDto.leconId);
      if (isNaN(leconId)) {
        throw new BadRequestException('Invalid leconId');
      }

      const lecon = await this.leconRepository.findOne({
        where: { id: leconId },
      });
      if (!lecon) throw new NotFoundException('Leçon not found');
      quiz.lecon = lecon;
    }

    if (updateQuizDto.parcoursId !== undefined) {
      const parcoursId = Number(updateQuizDto.parcoursId);
      if (isNaN(parcoursId)) {
        throw new BadRequestException('Invalid parcoursId');
      }

      const parcours = await this.parcoursRepository.findOne({
        where: { id: parcoursId },
      });
      if (!parcours) throw new NotFoundException('Parcours not found');
      quiz.parcours = parcours;
    }

    return this.quizRepository.save(quiz);
  }

  async remove(id: number): Promise<void> {
    const result = await this.quizRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Quiz not found');
    }
  }
}