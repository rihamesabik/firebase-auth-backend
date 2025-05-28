"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcoursService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const parcours_entity_1 = require("./parcours.entity");
let ParcoursService = class ParcoursService {
    parcoursRepository;
    constructor(parcoursRepository) {
        this.parcoursRepository = parcoursRepository;
    }
    async findAll() {
        return this.parcoursRepository.find();
    }
    async create(createParcoursDto) {
        const parcours = this.parcoursRepository.create(createParcoursDto);
        return this.parcoursRepository.save(parcours);
    }
    async findOne(id) {
        const parcours = await this.parcoursRepository.findOneBy({ id });
        if (!parcours) {
            throw new common_1.NotFoundException(`Parcours with ID ${id} not found`);
        }
        return parcours;
    }
    async update(id, updateParcoursDto) {
        const parcours = await this.findOne(id);
        if (updateParcoursDto.nom !== undefined) {
            parcours.nom = updateParcoursDto.nom;
        }
        if (updateParcoursDto.langue !== undefined) {
            parcours.langue = updateParcoursDto.langue;
        }
        if (updateParcoursDto.niveau !== undefined) {
            parcours.niveau = updateParcoursDto.niveau;
        }
        return this.parcoursRepository.save(parcours);
    }
    async remove(id) {
        const result = await this.parcoursRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Parcours with ID ${id} not found`);
        }
    }
};
exports.ParcoursService = ParcoursService;
exports.ParcoursService = ParcoursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parcours_entity_1.Parcours)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParcoursService);
//# sourceMappingURL=parcours.service.js.map