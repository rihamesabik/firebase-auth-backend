import { Test, TestingModule } from '@nestjs/testing';
import { LeconController } from './lecon.controller';
import { LeconService } from './lecon.service';

// Importez ou déclarez vos repositories mockés ici
class LeconRepository {}
class ParcoursRepository {}

describe('LeconController', () => {
  let controller: LeconController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeconController],
      providers: [
        LeconService,
        {
          provide: LeconRepository,
          useValue: {}, // Mock minimal
        },
        {
          provide: ParcoursRepository,
          useValue: {}, // Mock minimal
        },
      ],
    }).compile();

    controller = module.get<LeconController>(LeconController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
