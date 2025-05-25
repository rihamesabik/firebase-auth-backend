import { ParcoursService } from './parcours.service';
import { Parcours } from './parcours.entity';
export declare class ParcoursController {
    private readonly service;
    constructor(service: ParcoursService);
    create(parcours: Partial<Parcours>): Promise<Partial<Parcours> & Parcours>;
    findAll(): Promise<Parcours[]>;
    findOne(id: string): Promise<Parcours | null>;
    update(id: string, parcours: Partial<Parcours>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
