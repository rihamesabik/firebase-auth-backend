import { ParcoursService } from './parcours.service';
import { CreateParcoursDto } from './dto/create-parcours.dto';
import { UpdateParcoursDto } from './dto/update-parcours.dto';
export declare class ParcoursController {
    private readonly parcoursService;
    constructor(parcoursService: ParcoursService);
    findAll(): Promise<import("./parcours.entity").Parcours[]>;
    findOne(id: number): Promise<import("./parcours.entity").Parcours>;
    create(dto: CreateParcoursDto): Promise<import("./parcours.entity").Parcours>;
    update(id: number, dto: UpdateParcoursDto): Promise<import("./parcours.entity").Parcours>;
    remove(id: number): Promise<void>;
}
