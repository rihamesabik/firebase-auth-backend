import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('check')
  async checkToken(@Headers('authorization') auth: string) {
    // Vérifier si l'authorization header est bien présent
    const token = auth?.replace('Bearer ', '');
    
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      // Vérification du token via FirebaseService
      const { decoded, jwtToken } = await this.firebaseService.verifyToken(token);
      
      // Retourner le message et le token généré
      return { message: `hello ${decoded.email}`, jwtToken };
    } catch (error) {
      // Si une erreur se produit lors de la vérification du token (token invalide ou expiré)
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}

