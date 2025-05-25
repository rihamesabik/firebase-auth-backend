import { Injectable } from '@nestjs/common';

export interface Card {
  question: string;
  answer: string;
  level: number; // Le niveau pour suivre l'état de la carte
}

@Injectable()
export class LeitnerService {
  private cards: Card[] = []; // Tableau contenant les cartes de révision

  // Méthode pour ajouter une carte
  addCard(question: string, answer: string): void {
    const newCard: Card = { question, answer, level: 0 };
    this.cards.push(newCard);
  }

  // Méthode pour réviser une carte
  reviewCard(cardIndex: number, isCorrect: boolean): void {
    const card = this.cards[cardIndex];
    if (card) {
      if (isCorrect) {
        card.level += 1; // Augmenter le niveau de la carte si la réponse est correcte
      } else {
        card.level = Math.max(0, card.level - 1); // Décrémenter le niveau si la réponse est incorrecte
      }
    }
  }

  // Méthode pour obtenir une carte à réviser en fonction du niveau
  getCardsToReview(): Card[] {
    return this.cards.filter(card => card.level < 5); // Réviser les cartes dont le niveau est inférieur à 5
  }
}
