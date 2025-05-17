import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Parcours } from './parcours/parcours.entity';
import { Module } from './module/module.entity';
import { Lecon } from './lecon/lecon.entity';
import { Quiz } from './quiz/quiz.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  // Créer le parcours
  const parcours = new Parcours();
  parcours.nom = 'Français A1';
  parcours.langue = 'fr';
  parcours.niveau = 'A1';

  // Module 1
  const module1 = new Module();
  module1.titre = 'Grammaire de base';
  module1.description = 'Articles, genres, etc.';
  module1.parcours = parcours;

  const quiz1 = new Quiz();
  quiz1.question = 'Quel est l article défini pour "chat" ?';
  quiz1.propositions = ['le', 'la', 'les'];
  quiz1.bonneReponse = 'le';
  quiz1.parcours = parcours;

  const lecon1 = new Lecon();
  lecon1.titre = 'Les articles définis';
  lecon1.contenu = 'Contenu sur les articles définis...';
  lecon1.module = module1;
  lecon1.parcours = parcours;
  lecon1.quiz = [quiz1];
  quiz1.lecon = lecon1;

  // Module 2
  const module2 = new Module();
  module2.titre = 'Vocabulaire';
  module2.description = 'Vocabulaire de base.';
  module2.parcours = parcours;

  const quiz2 = new Quiz();
  quiz2.question = 'Comment dit-on "chat" en anglais ?';
  quiz2.propositions = ['dog', 'cat', 'mouse'];
  quiz2.bonneReponse = 'cat';
  quiz2.parcours = parcours;

  const lecon2 = new Lecon();
  lecon2.titre = 'Les animaux domestiques';
  lecon2.contenu = 'Contenu sur les animaux...';
  lecon2.module = module2;
  lecon2.parcours = parcours;
  lecon2.quiz = [quiz2];
  quiz2.lecon = lecon2;

  module1.lecons = [lecon1];
  module2.lecons = [lecon2];
  parcours.modules = [module1, module2];
  parcours.lecons = [lecon1, lecon2];
  parcours.quizzes = [quiz1, quiz2];

  await dataSource.getRepository(Parcours).save(parcours);

  console.log('✅ Base de données initialisée avec succès.');
  await app.close();
}
bootstrap();
