import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Lecon } from '../lecon/lecon.entity';
import { Parcours } from '../parcours/parcours.entity'; // Import de Parcours

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column("simple-array")
  propositions: string[]; // tableau de réponses possibles

  @Column()
  bonneReponse: string;

  // Relation ManyToOne : Un Quiz appartient à un Parcours
  @ManyToOne(() => Parcours, (parcours) => parcours.quizzes)
  parcours: Parcours;

  // Relation ManyToOne : Un Quiz appartient à une Leçon
  @ManyToOne(() => Lecon, (lecon) => lecon.quiz)
  lecon: Lecon;
}
