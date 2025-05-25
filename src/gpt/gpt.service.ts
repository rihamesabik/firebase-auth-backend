import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: 'https://openrouter.ai/api/v1',
    });
  }

  async ask(question: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Tu es un tuteur intelligent, bienveillant et patient. Tu aides les étudiants à comprendre des concepts de manière claire, progressive et pédagogique.',
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    return response.choices[0].message.content || 'Pas de réponse';
  }
}
