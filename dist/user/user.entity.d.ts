export type UserRole = 'eleve' | 'enseignant' | 'admin' | 'rh';
export declare class User {
    id: number;
    email: string;
    firebaseUid: string;
    role: UserRole;
}
