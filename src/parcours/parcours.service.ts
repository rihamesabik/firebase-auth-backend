import { Injectable } from '@nestjs/common';
import { CreateParcoursDto } from './dto/create-parcours.dto';
import { Parcours } from './parcours.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ParcoursService {
  // Utilisation de Repository de TypeORM pour la gestion des données dans la DB
  constructor(
    @InjectRepository(Parcours)
    private readonly parcoursRepository: Repository<Parcours>,
  ) {}

  async create(createParcoursDto: CreateParcoursDto): Promise<Parcours> {
    // Création du nouvel objet de type Parcours
    const parcours = this.parcoursRepository.create(createParcoursDto);
    return this.parcoursRepository.save(parcours);
  }

  async findAll(): Promise<Parcours[]> {
    // Retourne tous les parcours depuis la base de données
    return this.parcoursRepository.find();
  }
}
