import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecon } from './lecon.entity';
import { LeconService } from './lecon.service';
import { LeconController } from './lecon.controller';
import { Parcours } from '../parcours/parcours.entity';  // Import de Parcours

@Module({
  imports: [TypeOrmModule.forFeature([Lecon, Parcours])],  // Charger aussi le modèle Parcours
  controllers: [LeconController],
  providers: [LeconService],
})
export class LeconModule {}
