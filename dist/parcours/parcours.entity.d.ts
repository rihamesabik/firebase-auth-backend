import { Lecon } from '../lecon/lecon.entity';
import { Quiz } from '../quiz/quiz.entity';
import { Module } from '../module/module.entity';
export declare class Parcours {
    id: number;
    nom: string;
    langue: 'fr' | 'en' | 'es' | 'ar';
    niveau: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
    lecons: Lecon[];
    quizzes: Quiz[];
    modules: Module[];
}
