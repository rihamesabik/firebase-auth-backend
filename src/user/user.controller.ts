import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  findOne(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: Partial<User>) {
    return this.userService.create(userData);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
