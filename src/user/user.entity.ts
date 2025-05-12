import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserRole = 'eleve' | 'enseignant' | 'admin' | 'rh';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firebaseUid: string;

  @Column({
    type: 'enum',
    enum: ['eleve', 'enseignant', 'admin', 'rh'],
    default: 'eleve',
  })
  role: UserRole;
}
