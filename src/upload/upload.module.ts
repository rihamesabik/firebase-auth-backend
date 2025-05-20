import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import * as dotenv from 'dotenv';
dotenv.config();
import { WhisperService } from '../whisper/whisper-cpp.service';

@Module({
  imports: [],
  controllers: [UploadController],
  providers: [UploadService, WhisperService],
})
export class UploadModule {}
