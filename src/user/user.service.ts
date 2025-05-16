import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';// import the repository decorator
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  findOne(findOne: any) {
    throw new Error('Method not implemented.');
  }
  //inject the user repository to interact with the database
  constructor(
// inject the repository for the User entity
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}
