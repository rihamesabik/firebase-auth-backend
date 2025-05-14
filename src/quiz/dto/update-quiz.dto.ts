import { IsOptional, IsString, IsArray, IsInt } from 'class-validator';

export class UpdateQuizDto {
  @IsOptional()
  @IsInt()
  leconId?: number;

  @IsOptional()
  @IsInt()
  parcoursId?: number;

  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsArray()
  propositions?: string[];

  @IsOptional()
  @IsString()
  bonneReponse?: string;
}