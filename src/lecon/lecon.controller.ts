import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LeconService } from './lecon.service';
import { CreateLeconDto } from './dto/create-lecon.dto';
import { UpdateLeconDto } from './dto/update-lecon.dto';

@Controller('lecon')
export class LeconController {
  constructor(private readonly leconService: LeconService) {}

  @Get()
  findAll() {
    return this.leconService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leconService.findOne(+id);
  }

  @Post()
  create(@Body() createLeconDto: CreateLeconDto) {
    return this.leconService.create(createLeconDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLeconDto: UpdateLeconDto) {
    return this.leconService.update(+id, updateLeconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leconService.remove(+id);
  }
}
