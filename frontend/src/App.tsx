// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";

// Pages principales
import Login from "./components/Login";
import Signup from "./components/Signup";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";
import VideoPlayer from "./components/VideoPlayer";
import ChooseLanguage from "./components/ChooseLanguage";
import ChooseLevel from "./components/ChooseLevel";

// Leçons niveau débutant (anglais)
import BeginnerLessons from "./components/BeginnerLessons";
import BeginnerLesson1 from "./components/BeginnerLesson1";
import BeginnerLesson2 from "./components/BeginnerLesson2";
import BeginnerLesson3 from "./components/BeginnerLesson3";
import BeginnerLesson4 from "./components/BeginnerLesson4";
import BeginnerLesson5 from "./components/BeginnerLesson5";
import BeginnerLesson6 from "./components/BeginnerLesson6";
import BeginnerLesson7 from "./components/BeginnerLesson7";

// Leçons niveau intermédiaire (anglais)
import IntermediateLessons from "./components/IntermediateLessons";
import IntermediateLesson1 from "./components/IntermediateLesson1";
import IntermediateLesson2 from "./components/IntermediateLesson2";
import IntermediateLesson3 from "./components/IntermediateLesson3";
import IntermediateLesson4 from "./components/IntermediateLesson4";
import IntermediateLesson5 from "./components/IntermediateLesson5";
import IntermediateLesson6 from "./components/IntermediateLesson6";
import IntermediateLesson7 from "./components/IntermediateLesson7";

// Leçons niveau avancé (anglais)
import AdvancedLessons from "./components/AdvancedLessons";
import AdvancedLesson1 from "./components/AdvancedLesson1";
import AdvancedLesson2 from "./components/AdvancedLesson2";
import AdvancedLesson3 from "./components/AdvancedLesson3";
import AdvancedLesson4 from "./components/AdvancedLesson4";
import AdvancedLesson5 from "./components/AdvancedLesson5";

// Sélections de niveau multilingue
import ChoisirNiveau from "./components/ChoisirNiveau"; // Français
import ElegirNivel from "./components/ElegirNivel";     // Espagnol

// Leçons français débutant
import FrancaisLessonsDebutant from "./components/francais/FrancaisLessonsDebutant";
import FrancaisLessonDebutant1 from "./components/francais/FrancaisLessonDebutant1";
import FrancaisLessonDebutant2 from "./components/francais/FrancaisLessonDebutant2";
import FrancaisLessonDebutant3 from "./components/francais/FrancaisLessonDebutant3";
import FrancaisLessonDebutant4 from "./components/francais/FrancaisLessonDebutant4";
import FrancaisLessonDebutant5 from "./components/francais/FrancaisLessonDebutant5";
import FrancaisLessonDebutant6 from "./components/francais/FrancaisLessonDebutant6";
import FrancaisLessonDebutant7 from "./components/francais/FrancaisLessonDebutant7";
import FrancaisLessonsIntermediaire from "./components/francais/FrancaisLessonsIntermediaire";
import FrancaisLessonIntermediaire1 from "./components/francais/FrancaisLessonIntermediaire1";
import FrancaisLessonIntermediaire2 from "./components/francais/FrancaisLessonIntermediaire2";
import FrancaisLessonIntermediaire3 from "./components/francais/FrancaisLessonIntermediaire3";

import FrancaisLessonIntermediaire4 from "./components/francais/FrancaisLessonIntermediaire4";
import FrancaisLessonIntermediaire5 from "./components/francais/FrancaisLessonIntermediaire5";
import FrancaisLessonIntermediaire6 from "./components/francais/FrancaisLessonIntermediaire6";
import FrancaisLessonIntermediaire7 from "./components/francais/FrancaisLessonIntermediaire7";
import FrancaisLessonsAvancee from "./components/francais/FrancaisLessonsAvancee";
import FrancaisLessonAvancee1 from './components/francais/FrancaisLessonAvancee1';
import FrancaisLessonAvancee2 from './components/francais/FrancaisLessonAvancee2';
import FrancaisLessonAvancee3 from './components/francais/FrancaisLessonAvancee3';
import FrancaisLessonAvancee4 from './components/francais/FrancaisLessonAvancee4';
import FrancaisLessonAvancee5 from './components/francais/FrancaisLessonAvancee5';
import FrancaisLessonAvancee6 from './components/francais/FrancaisLessonAvancee6';
import FrancaisLessonAvancee7 from './components/francais/FrancaisLessonAvancee7';
import ChatIA from './components/ChatIA';
import EspagnolLessonsDebutant from "./components/espagnol/EspagnolLessonsDebutant";
import LessonDebutant1 from "./components/espagnol/LessonDebutant1";
import LessonDebutant2 from "./components/espagnol/LessonDebutant2";
import LessonDebutant3 from "./components/espagnol/LessonDebutant3";
import LessonDebutant4 from "./components/espagnol/LessonDebutant4";
import LessonDebutant5 from "./components/espagnol/LessonDebutant5";
import LessonDebutant6 from "./components/espagnol/LessonDebutant6";
import LessonDebutant7 from "./components/espagnol/LessonDebutant7";
import EspagnolLessonsIntermediaire from "./components/espagnol/EspagnolLessonsIntermediaire";
import LessonIntermediaire1 from "./components/espagnol/LessonIntermediaire1";
import LessonIntermediaire2 from "./components/espagnol/LessonIntermediaire2";
import LessonIntermediaire3 from "./components/espagnol/LessonIntermediaire3";
import LessonIntermediaire4 from "./components/espagnol/LessonIntermediaire4";
import LessonIntermediaire5 from "./components/espagnol/LessonIntermediaire5";
import LessonIntermediaire6 from "./components/espagnol/LessonIntermediaire6";
import LessonIntermediaire7 from "./components/espagnol/LessonIntermediaire7";
import EspagnolLessonsAvance from "./components/espagnol/EspagnolLessonsAvance";
import  LessonAvancee1 from "./components/espagnol/LessonAvancee1";
import  LessonAvancee2 from "./components/espagnol/LessonAvancee2";
import  LessonAvancee3 from "./components/espagnol/LessonAvancee3";
import  LessonAvancee4 from "./components/espagnol/LessonAvancee4";
import  LessonAvancee5 from "./components/espagnol/LessonAvancee5";
import  LessonAvancee6 from "./components/espagnol/LessonAvancee6";
import  LessonAvancee7 from "./components/espagnol/LessonAvancee7";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/choose-language" element={<ChooseLanguage />} />
        <Route path="/choose-level" element={<ChooseLevel />} />

        {/* Leçons anglais - débutant */}
        <Route path="/beginner-lessons" element={<BeginnerLessons />} />
        <Route path="/beginner-lessons/lesson-1" element={<BeginnerLesson1 />} />
        <Route path="/beginner-lessons/lesson-2" element={<BeginnerLesson2 />} />
        <Route path="/beginner-lessons/lesson-3" element={<BeginnerLesson3 />} />
        <Route path="/beginner-lessons/lesson-4" element={<BeginnerLesson4 />} />
        <Route path="/beginner-lessons/lesson-5" element={<BeginnerLesson5 />} />
        <Route path="/beginner-lessons/lesson-6" element={<BeginnerLesson6 />} />
        <Route path="/beginner-lessons/lesson-7" element={<BeginnerLesson7 />} />

        {/* Leçons anglais - intermédiaire */}
        <Route path="/intermediate-lessons" element={<IntermediateLessons />} />
        <Route path="/intermediate-lessons/lesson-1" element={<IntermediateLesson1 />} />
        <Route path="/intermediate-lessons/lesson-2" element={<IntermediateLesson2 />} />
        <Route path="/intermediate-lessons/lesson-3" element={<IntermediateLesson3 />} />
        <Route path="/intermediate-lessons/lesson-4" element={<IntermediateLesson4 />} />
        <Route path="/intermediate-lessons/lesson-5" element={<IntermediateLesson5 />} />
        <Route path="/intermediate-lessons/lesson-6" element={<IntermediateLesson6 />} />
        <Route path="/intermediate-lessons/lesson-7" element={<IntermediateLesson7 />} />

        {/* Leçons anglais - avancé */}
        <Route path="/advanced-lessons" element={<AdvancedLessons />} />
        <Route path="/advanced-lessons/lesson-1" element={<AdvancedLesson1 />} />
        <Route path="/advanced-lessons/lesson-2" element={<AdvancedLesson2 />} />
        <Route path="/advanced-lessons/lesson-3" element={<AdvancedLesson3 />} />
        <Route path="/advanced-lessons/lesson-4" element={<AdvancedLesson4 />} />
        <Route path="/advanced-lessons/lesson-5" element={<AdvancedLesson5 />} />

        {/* Sélection niveau multilingue */}
        <Route path="/choisir-niveau" element={<ChoisirNiveau />} /> {/* Français */}
        <Route path="/elegir-nivel" element={<ElegirNivel />} />       {/* Espagnol */}

        {/* Leçons français - débutant */}
        <Route path="/francais/debutant" element={<FrancaisLessonsDebutant />} />
        <Route path="/francais/debutant/lesson-1" element={<FrancaisLessonDebutant1 />} />
        <Route path="/francais/debutant/lesson-2" element={<FrancaisLessonDebutant2 />} />
        <Route path="/francais/debutant/lesson-3" element={<FrancaisLessonDebutant3 />} />
        <Route path="/francais/debutant/lesson-4" element={<FrancaisLessonDebutant4 />} />
        <Route path="/francais/debutant/lesson-5" element={<FrancaisLessonDebutant5 />} />
        <Route path="/francais/debutant/lesson-6" element={<FrancaisLessonDebutant6 />} />
        <Route path="/francais/debutant/lesson-7" element={<FrancaisLessonDebutant7 />} />

<Route path="/francais/intermediaire" element={<FrancaisLessonsIntermediaire />} />
<Route path="/francais/intermediaire/lesson-1" element={<FrancaisLessonIntermediaire1 />} />
<Route path="/francais/intermediaire/lesson-2" element={<FrancaisLessonIntermediaire2 />} />
<Route path="/francais/intermediaire/lesson-3" element={<FrancaisLessonIntermediaire3 />} />
  <Route path="/francais/intermediaire/lesson-4" element={<FrancaisLessonIntermediaire4 />} />
 <Route path="/francais/intermediaire/lesson-5" element={<FrancaisLessonIntermediaire5 />} />
 <Route path="/francais/intermediaire/lesson-6" element={<FrancaisLessonIntermediaire6 />} />
  <Route path="/francais/intermediaire/lesson-7" element={<FrancaisLessonIntermediaire7 />} />
   <Route path="/francais/avance" element={<FrancaisLessonsAvancee />} />
           <Route path="/francais/avancee/lesson-1" element={<FrancaisLessonAvancee1 />} />
        <Route path="/francais/avancee/lesson-2" element={<FrancaisLessonAvancee2 />} />
        <Route path="/francais/avancee/lesson-3" element={<FrancaisLessonAvancee3 />} />
        <Route path="/francais/avancee/lesson-4" element={<FrancaisLessonAvancee4 />} />
        <Route path="/francais/avancee/lesson-5" element={<FrancaisLessonAvancee5 />} />
        <Route path="/francais/avancee/lesson-6" element={<FrancaisLessonAvancee6 />} />
        <Route path="/francais/avancee/lesson-7" element={<FrancaisLessonAvancee7 />} />
       <Route path="/chat" element={<ChatIA />} />

             <Route path="/espagnol/debutant" element={<EspagnolLessonsDebutant />} />
             <Route path="/espagnol/debutant/lesson-1" element={<LessonDebutant1 />} />
        <Route path="/espagnol/debutant/lesson-2" element={<LessonDebutant2 />} />
            <Route path="/espagnol/debutant/lesson-3" element={<LessonDebutant3 />} />
           <Route path="/espagnol/debutant/lesson-4" element={<LessonDebutant4 />} />
          <Route path="/espagnol/debutant/lesson-5" element={<LessonDebutant5 />} />
          <Route path="/espagnol/debutant/lesson-6" element={<LessonDebutant6 />} />
           <Route path="/espagnol/debutant/lesson-7" element={<LessonDebutant7 />} />
           <Route path="/espagnol/intermediaire" element={<EspagnolLessonsIntermediaire />} />
           <Route path="/espagnol/intermediaire/lesson-2" element={<LessonIntermediaire2 />} />
                     <Route path="/espagnol/intermediaire/lesson-1" element={<LessonIntermediaire1 />} />
                  <Route path="/espagnol/intermediaire/lesson-3" element={<LessonIntermediaire3 />} />
                     <Route path="/espagnol/intermediaire/lesson-4" element={<LessonIntermediaire4 />} />
        <Route path="/espagnol/intermediaire/lesson-5" element={<LessonIntermediaire5 />} />
                     <Route path="/espagnol/intermediaire/lesson-6" element={<LessonIntermediaire6 />} />
        <Route path="/espagnol/intermediaire/lesson-7" element={<LessonIntermediaire7 />} />
          <Route path="/espagnol/avance" element={<EspagnolLessonsAvance />} />
             <Route path="/espagnol/avance/lesson-1" element={<LessonAvancee1 />} />
             <Route path="/espagnol/avance/lesson-2" element={<LessonAvancee2 />} />
             <Route path="/espagnol/avance/lesson-3" element={<LessonAvancee3 />} />
             <Route path="/espagnol/avance/lesson-4" element={<LessonAvancee4 />} />
             <Route path="/espagnol/avance/lesson-5" element={<LessonAvancee5 />} />
             <Route path="/espagnol/avance/lesson-6" element={<LessonAvancee6 />} />
             <Route path="/espagnol/avance/lesson-7" element={<LessonAvancee7 />} />
                 
                          
             

      </Routes>
    </LanguageProvider>
  );
}

export default App;
