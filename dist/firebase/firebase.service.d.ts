export declare class FirebaseService {
    constructor();
    verifyToken(idToken: string): Promise<{
        decoded: import("firebase-admin/lib/auth/token-verifier").DecodedIdToken;
        jwtToken: string;
    }>;
    private generateJWT;
    getUserByEmail(email: string): Promise<import("firebase-admin/lib/auth/user-record").UserRecord | null>;
    createUser(email: string, password: string): Promise<import("firebase-admin/lib/auth/user-record").UserRecord>;
}
