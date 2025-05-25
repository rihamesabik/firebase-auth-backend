import { Repository } from 'typeorm';
import { Parcours } from './parcours.entity';
export declare class ParcoursService {
    private parcoursRepo;
    constructor(parcoursRepo: Repository<Parcours>);
    create(parcours: Partial<Parcours>): Promise<Partial<Parcours> & Parcours>;
    findAll(): Promise<Parcours[]>;
    findOne(id: number): Promise<Parcours | null>;
    update(id: number, parcours: Partial<Parcours>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
