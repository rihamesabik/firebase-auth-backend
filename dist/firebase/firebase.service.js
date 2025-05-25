"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const admin = require("firebase-admin");
const common_1 = require("@nestjs/common");
const serviceAccount = require("../auth/firebaseServiceAcount.json");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let FirebaseService = class FirebaseService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
    async verifyToken(idToken) {
        try {
            const decoded = await admin.auth().verifyIdToken(idToken);
            const jwtToken = this.generateJWT(decoded);
            return { decoded, jwtToken };
        }
        catch (error) {
            throw new Error('Invalid or expired ID token');
        }
    }
    generateJWT(decoded) {
        const payload = { uid: decoded.uid, email: decoded.email };
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in the environment variables');
        }
        const jwtToken = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return jwtToken;
    }
    async getUserByEmail(email) {
        try {
            return await admin.auth().getUserByEmail(email);
        }
        catch (error) {
            return null;
        }
    }
    async createUser(email, password) {
        try {
            return await admin.auth().createUser({
                email,
                password,
                displayName: email.split('@')[0],
            });
        }
        catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map