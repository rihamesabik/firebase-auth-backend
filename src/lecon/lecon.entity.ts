import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Parcours } from '../parcours/parcours.entity';  // Import de Parcours
import { Quiz } from '../quiz/quiz.entity';  // Import de Quiz
@Entity()
export class Lecon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  contenu: string;

  @ManyToOne(() => Parcours, (parcours) => parcours.lecons)  // Relation many-to-one
  parcours: Parcours;
  @OneToMany(() => Quiz, (quiz) => quiz.lecon)  // Spécifier l'autre côté de la relation
  quiz: Quiz[];
}
