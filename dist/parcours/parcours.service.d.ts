import { Repository } from 'typeorm';
import { Parcours } from './parcours.entity';
import { CreateParcoursDto } from './dto/create-parcours.dto';
import { UpdateParcoursDto } from './dto/update-parcours.dto';
export declare class ParcoursService {
    private parcoursRepository;
    constructor(parcoursRepository: Repository<Parcours>);
    findAll(): Promise<Parcours[]>;
    create(createParcoursDto: CreateParcoursDto): Promise<Parcours>;
    findOne(id: number): Promise<Parcours>;
    update(id: number, updateParcoursDto: UpdateParcoursDto): Promise<Parcours>;
    remove(id: number): Promise<void>;
}
