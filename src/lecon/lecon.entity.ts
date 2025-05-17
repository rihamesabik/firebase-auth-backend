import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Parcours } from '../parcours/parcours.entity';
import { Quiz } from '../quiz/quiz.entity';
import { Module } from '../module/module.entity';

@Entity()
export class Lecon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  contenu: string;

  @ManyToOne(() => Parcours, (parcours) => parcours.lecons, { nullable: false, onDelete: 'CASCADE' })
  parcours: Parcours;

  @ManyToOne(() => Module, (module) => module.lecons, { nullable: true, onDelete: 'CASCADE' })
module: Module;


  @OneToMany(() => Quiz, (quiz) => quiz.lecon)
  quiz: Quiz[];
}
