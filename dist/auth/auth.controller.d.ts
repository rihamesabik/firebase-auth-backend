import { FirebaseService } from '../firebase/firebase.service';
export declare class AuthController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    checkToken(auth: string): Promise<{
        message: string;
        jwtToken: string;
    }>;
}
