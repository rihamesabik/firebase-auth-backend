import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    createUser(email: string, hashedPassword: string): Promise<User>;
    findById(id: number): Promise<User | null>;
}
