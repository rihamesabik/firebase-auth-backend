import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import * as serviceAccount from '../auth/firebaseServiceAcount.json';
import { sign } from 'jsonwebtoken'; // Importer la fonction sign de jsonwebtoken
import * as dotenv from 'dotenv';
dotenv.config(); // Charger les variables d'environnement depuis .env

@Injectable()
export class FirebaseService {
  constructor() {
    // Initialisation de Firebase Admin avec la clé de service
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount), // Type explicite de ServiceAccount
    });
  }

  // Vérifier le token Firebase (ID Token)
  async verifyToken(idToken: string) {
    try {
      // Vérification du token avec Firebase Admin
      const decoded = await admin.auth().verifyIdToken(idToken);

      // Générer un JWT personnalisé avec les informations Firebase
      const jwtToken = this.generateJWT(decoded);

      return { decoded, jwtToken }; // Retourne les informations du token et le JWT personnalisé
    } catch (error) {
      throw new Error('Invalid or expired ID token'); // Gérer l'erreur si le token est invalide
    }
  }

  // Générer un JWT avec les informations Firebase
  private generateJWT(decoded: admin.auth.DecodedIdToken) {
    const payload = { uid: decoded.uid, email: decoded.email };

    // Vérifier que la clé JWT_SECRET existe dans les variables d'environnement
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }

    // Générer un JWT avec une expiration de 5 heures
    const jwtToken = sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' });

    return jwtToken;
  }

  // Récupérer un utilisateur par email
  async getUserByEmail(email: string) {
    try {
      return await admin.auth().getUserByEmail(email);
    } catch (error) {
      // Retourne null si l'utilisateur n'est pas trouvé
      return null;
    }
  }

  // Créer un utilisateur avec email et mot de passe
  async createUser(email: string, password: string) {
    try {
      return await admin.auth().createUser({
        email,
        password,
        displayName: email.split('@')[0], // Utilise la partie avant '@' comme displayName
      });
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }
}
