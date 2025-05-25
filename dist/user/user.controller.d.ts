import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
}
