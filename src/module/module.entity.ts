import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Parcours } from '../parcours/parcours.entity';
import { Lecon } from '../lecon/lecon.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  description: string;

  @ManyToOne(() => Parcours, (parcours) => parcours.modules)
  parcours: Parcours;

  @OneToMany(() => Lecon, (lecon) => lecon.module)
  lecons: Lecon[];
}
