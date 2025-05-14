import { Controller, Post, Body, Get, Param, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll(): Promise<Quiz[]> {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuizDto: UpdateQuizDto,
  ): Promise<Quiz> {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.quizService.remove(id);
  }
}
