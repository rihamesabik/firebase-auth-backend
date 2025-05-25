import { Module } from '@nestjs/common';
import { LeitnerController } from './leitner.controller';
import { LeitnerService } from './leitner.service';

@Module({
  imports: [], // ici aucun service
  controllers: [LeitnerController],
  providers: [LeitnerService],
})
export class LeitnerModule {}
