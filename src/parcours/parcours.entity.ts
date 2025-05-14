import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lecon } from '../lecon/lecon.entity';  // Import de Lecon
import { Quiz } from '../quiz/quiz.entity';  // Import de Quiz
@Entity()
export class Parcours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  langue: 'fr' | 'en' | 'es' | 'ar';

  @Column()
  niveau: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

  // Relation One-to-Many : Un Parcours peut avoir plusieurs Leçons
  @OneToMany(() => Lecon, (lecon) => lecon.parcours)
  lecons: Lecon[];
   @OneToMany(() => Quiz, (quiz) => quiz.parcours)
  quizzes: Quiz[];
}
