import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParcoursService } from './parcours.service';
import { CreateParcoursDto } from './dto/create-parcours.dto';  // Importer le DTO

@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @Get()
  findAll() {
    return this.parcoursService.findAll();
  }

  @Post()
  create(@Body() createParcoursDto: CreateParcoursDto) {
    return this.parcoursService.create(createParcoursDto);
  }
}
