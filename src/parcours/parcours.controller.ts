import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ParcoursService } from './parcours.service';
import { CreateParcoursDto } from './dto/create-parcours.dto';
import { UpdateParcoursDto } from './dto/update-parcours.dto';

@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @Get()
  findAll() {
    return this.parcoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.parcoursService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateParcoursDto) {
    return this.parcoursService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateParcoursDto) {
    return this.parcoursService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.parcoursService.remove(id);
  }
}
