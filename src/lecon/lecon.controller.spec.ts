import { Test, TestingModule } from '@nestjs/testing';
import { LeconController } from './lecon.controller';
import { LeconService } from './lecon.service';

describe('LeconController', () => {
  let controller: LeconController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeconController],
      providers: [
        LeconService,
        {
          provide: 'LeconRepository',  // nom du token utilisé dans ton service
          useValue: {},               // mock vide
        },
        {
          provide: 'ParcoursRepository', // pareil
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LeconController>(LeconController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
