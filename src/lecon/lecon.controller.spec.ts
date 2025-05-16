import { Test, TestingModule } from '@nestjs/testing';
import { LeconController } from './lecon.controller';
import { LeconService } from './lecon.service';

describe('LeconController', () => {
  let controller: LeconController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeconController],
      providers: [LeconService], // juste le service sans mocks
    }).compile();

    controller = module.get<LeconController>(LeconController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
