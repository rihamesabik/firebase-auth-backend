import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
