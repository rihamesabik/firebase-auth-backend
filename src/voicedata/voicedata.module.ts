// src/voicedata/voicedata.module.ts
import { Module } from '@nestjs/common';
import { VoicedataController } from './voicedata.controller';
import { VoicedataService } from './voicedata.service';

@Module({
  imports: [],
  controllers: [VoicedataController], // Enregistrer le contrôleur
  providers: [VoicedataService],      // Enregistrer le service
})
export class VoicedataModule {}
