// src/whisper/whisper.module.ts
import { Module } from '@nestjs/common';
import { WhisperService } from './whisper-cpp.service';
import { WhisperController } from './whisper.controller';
@Module({
   controllers: [WhisperController],
  providers: [WhisperService],
  exports: [WhisperService],
})
export class WhisperModule {}
