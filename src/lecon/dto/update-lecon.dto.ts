import { PartialType } from '@nestjs/mapped-types';
import { CreateLeconDto } from './create-lecon.dto';

export class UpdateLeconDto extends PartialType(CreateLeconDto) {}
