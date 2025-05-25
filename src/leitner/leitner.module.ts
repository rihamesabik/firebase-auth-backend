import { Module } from '@nestjs/common';
import { LeitnerService } from './leitner.service';
import { LeitnerController } from './leitner.controller';
import { WhisperModule } from '../whisper/whisper.module';
@Module({
  imports: [WhisperModule], 
  controllers: [LeitnerController],
  providers: [LeitnerService],
})
export class LeitnerModule {}
