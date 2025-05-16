import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

describe('QuizController', () => {
  let controller: QuizController;
  let service: QuizService;

  const mockQuizService = {
    findAll: jest.fn().mockResolvedValue(['quiz1', 'quiz2']),
    findOne: jest.fn().mockResolvedValue('quiz1'),
    // ajoutez d'autres méthodes mockées ici selon vos besoins
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [
        {
          provide: QuizService,
          useValue: mockQuizService,
        },
      ],
    }).compile();

    controller = module.get<QuizController>(QuizController);
    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all quizzes', async () => {
    const result = await controller.findAll(); // suppose que cette méthode existe
    expect(result).toEqual(['quiz1', 'quiz2']);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one quiz', async () => {
    const result = await controller.findOne(1); // suppose que cette méthode existe
    expect(result).toEqual('quiz1');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });
});
