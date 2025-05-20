// src/whisper/whisper.module.ts
import { Module } from '@nestjs/common';
import { WhisperService } from './whisper-cpp.service';

@Module({
  providers: [WhisperService],
  exports: [WhisperService],
})
export class WhisperModule {}
