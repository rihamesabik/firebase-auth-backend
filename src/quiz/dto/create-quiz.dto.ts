import { IsNotEmpty, IsString, IsArray, IsInt } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  @IsInt()
  leconId: number;

  @IsNotEmpty()
  @IsInt()
  parcoursId: number;

  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsArray()
  propositions: string[];

  @IsNotEmpty()
  @IsString()
  bonneReponse: string;
}