import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([
      { id: 1, name: 'User One' },
      { id: 2, name: 'User Two' },
    ]),
    findOne: jest.fn().mockResolvedValue({ id: 1, name: 'User One' }),
    // ajoutez d'autres méthodes mockées selon les besoins
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all users', async () => {
    const result = await controller.findAll(); // suppose que la méthode existe
    expect(result).toEqual([
      { id: 1, name: 'User One' },
      { id: 2, name: 'User Two' },
    ]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one user by id', async () => {
    const result = await controller.findOne('1'); // suppose que la méthode existe
    expect(result).toEqual({ id: 1, name: 'User One' });
    expect(service.findOne).toHaveBeenCalledWith('1');
  });
});
