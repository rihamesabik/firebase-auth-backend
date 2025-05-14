export class CreateParcoursDto {
  readonly nom: string;
  readonly langue: 'fr' | 'en' | 'es' | 'ar';
  readonly niveau: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}
