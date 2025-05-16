import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parcours } from './parcours.entity';
import { CreateParcoursDto } from './dto/create-parcours.dto';
import { UpdateParcoursDto } from './dto/update-parcours.dto';

@Injectable()
export class ParcoursService {
  constructor(
    @InjectRepository(Parcours)
    private parcoursRepository: Repository<Parcours>,
  ) {}

  async findAll(): Promise<Parcours[]> {
    return this.parcoursRepository.find();
  }

  async create(createParcoursDto: CreateParcoursDto): Promise<Parcours> {
    const parcours = this.parcoursRepository.create(createParcoursDto);
    return this.parcoursRepository.save(parcours);
  }

  async findOne(id: number): Promise<Parcours> {
    const parcours = await this.parcoursRepository.findOneBy({ id });
    if (!parcours) {
      throw new NotFoundException(`Parcours with ID ${id} not found`);
    }
    return parcours;
  }

  async update(id: number, updateParcoursDto: UpdateParcoursDto): Promise<Parcours> {
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

  async remove(id: number): Promise<void> {
    const result = await this.parcoursRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Parcours with ID ${id} not found`);
    }
  }
}
