import React from "react";
import { useNavigate } from "react-router-dom";

const FrancaisLessonsIntermediaire: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    { title: "Leçon 1 : Les nutriments", path: "/francais/intermediaire/lesson-1" },
    { title: "Leçon 2 : La digestion", path: "/francais/intermediaire/lesson-2" },
    { title: "Leçon 3 : Les groupes alimentaires", path: "/francais/intermediaire/lesson-3" },
    { title: "Leçon 4 : L’équilibre alimentaire", path: "/francais/intermediaire/lesson-4" },
    { title: "Leçon 5 : L’hydratation", path: "/francais/intermediaire/lesson-5" },
    { title: "Leçon 6 : Les maladies liées à la nutrition", path: "/francais/intermediaire/lesson-6" },
    { title: "Leçon 7 : Les bonnes habitudes alimentaires", path: "/francais/intermediaire/lesson-7" },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Niveau Intermédiaire - Leçons de Français</h1>
      <ul className="space-y-4">
        {lessons.map((lesson, index) => (
          <li key={index}>
            <button
              onClick={() => navigate(lesson.path)}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
            >
              {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrancaisLessonsIntermediaire;
