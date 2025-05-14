export class CreateLeconDto {
  readonly titre: string;
  readonly contenu: string;
  readonly parcoursId: number;  // L'ID du parcours auquel la leçon appartient
}
