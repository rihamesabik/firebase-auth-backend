import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { Parcours } from './parcours/parcours.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // Charge les variables d'environnement globalement dans toute l'application
    }),
    // Configuration de TypeORM pour PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',  // Default to db if not defined in .env
      port: parseInt(process.env.DB_PORT || '5432', 10), // Parse port to integer
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'langua360',
      entities: [User, Parcours],
       synchronize: true,
      logging: true,      // Affiche les logs SQL pour le débogage
    }),
    UserModule,
  ],
})
export class AppModule {}
