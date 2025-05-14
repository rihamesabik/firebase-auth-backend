import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecon } from './lecon.entity';
import { CreateLeconDto } from './dto/create-lecon.dto';
import { UpdateLeconDto } from './dto/update-lecon.dto';
import { Parcours } from '../parcours/parcours.entity';

@Injectable()
export class LeconService {
  constructor(
    @InjectRepository(Lecon)
    private readonly leconRepository: Repository<Lecon>,

    @InjectRepository(Parcours)
    private readonly parcoursRepository: Repository<Parcours>,
  ) {}

  // Créer une leçon
  async create(createLeconDto: CreateLeconDto): Promise<Lecon> {
    const parcours = await this.parcoursRepository.findOne({
      where: { id: createLeconDto.parcoursId },
    });

    if (!parcours) {
      throw new NotFoundException('Parcours not found');
    }

    const lecon = this.leconRepository.create({
      titre: createLeconDto.titre,
      contenu: createLeconDto.contenu,
      parcours: parcours,
    });

    return this.leconRepository.save(lecon);
  }

  // Toutes les leçons
  async findAll(): Promise<Lecon[]> {
    return this.leconRepository.find({ relations: ['parcours'] });
  }

  // Une seule leçon par ID
  async findOne(id: number): Promise<Lecon> {
    const lecon = await this.leconRepository.findOne({
      where: { id },
      relations: ['parcours'],
    });

    if (!lecon) {
      throw new NotFoundException('Leçon not found');
    }

    return lecon;
  }

  // ✅ Mise à jour d'une leçon
  async update(id: number, updateLeconDto: UpdateLeconDto): Promise<Lecon> {
    const lecon = await this.leconRepository.findOne({
      where: { id },
      relations: ['parcours'],
    });

    if (!lecon) {
      throw new NotFoundException('Leçon not found');
    }

    // Mise à jour des champs si fournis
    if (updateLeconDto.titre !== undefined) lecon.titre = updateLeconDto.titre;
    if (updateLeconDto.contenu !== undefined) lecon.contenu = updateLeconDto.contenu;

    // Si parcoursId est fourni, on met à jour l'association
    if (updateLeconDto.parcoursId !== undefined) {
      const parcours = await this.parcoursRepository.findOne({
        where: { id: updateLeconDto.parcoursId },
      });

      if (!parcours) {
        throw new NotFoundException('Parcours not found');
      }

      lecon.parcours = parcours;
    }

    return this.leconRepository.save(lecon);
  }

  // ✅ Suppression d'une leçon
  async remove(id: number): Promise<void> {
    const lecon = await this.leconRepository.findOne({ where: { id } });

    if (!lecon) {
      throw new NotFoundException('Leçon not found');
    }

    await this.leconRepository.remove(lecon);
  }
}
