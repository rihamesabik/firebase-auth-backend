import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcours } from './parcours.entity';
import { ParcoursService } from './parcours.service';
import { ParcoursController } from './parcours.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Parcours])],
  controllers: [ParcoursController],
  providers: [ParcoursService],
  exports: [TypeOrmModule],
})
export class ParcoursModule {}
