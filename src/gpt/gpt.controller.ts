import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('ask')
  async ask(@Body('prompt') prompt: string) {
    const response = await this.gptService.ask(prompt);
    return { response };
  }
}
