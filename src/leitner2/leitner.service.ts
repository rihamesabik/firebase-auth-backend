import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface ReviewData {
  cardId: number;
  isCorrect: boolean;
  timestamp: string;
}

const DATA_DIR = path.resolve('data');
const DATA_FILE = path.resolve(__dirname, 'data/review_data.json');

@Injectable()
export class LeitnerService {
  private async ensureDataFileExists() {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      try {
        await fs.access(DATA_FILE);
      } catch {
        await fs.writeFile(DATA_FILE, '[]');
      }
    } catch (error) {
      console.error('Failed to ensure data file:', error);
      throw new InternalServerErrorException('Cannot access data storage');
    }
  }

  // Nouvelle méthode qui vérifie si le fichier contient des données valides
  private async hasValidData(): Promise<boolean> {
    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      if (!fileContent) return false;
      const parsed = JSON.parse(fileContent);
      return Array.isArray(parsed) && parsed.length > 0;
    } catch (error) {
      console.error('Error validating data file:', error);
      return false;
    }
  }

  async saveReview(data: ReviewData): Promise<void> {
    await this.ensureDataFileExists();

    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      const reviews: ReviewData[] = fileContent ? JSON.parse(fileContent) : [];
      reviews.push(data);
      await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2));
    } catch (error) {
      console.error('Error saving review:', error);
      throw new InternalServerErrorException('Failed to save review data');
    }
  }

  async getAllReviews(): Promise<ReviewData[]> {
    await this.ensureDataFileExists();

    const hasData = await this.hasValidData();
    if (!hasData) {
      // Retourne un tableau vide si pas de données valides
      return [];
    }

    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading review data:', error);
      return [];
    }
  }
}
