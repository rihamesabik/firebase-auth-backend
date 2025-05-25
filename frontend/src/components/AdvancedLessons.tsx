import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdvancedLessons: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    { id: 1, title: "Leçon 1 : Expressions complexes" },
    { id: 2, title: "Leçon 2 : Subjonctif avancé" },
    { id: 3, title: "Leçon 3 : Discours indirect" },
    { id: 4, title: "Leçon 4 : Styles littéraires" },
    { id: 5, title: "Leçon 5 : Compréhension orale approfondie" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900 p-12 flex flex-col items-center text-white overflow-hidden select-none">

      {/* Fond dynamique avec particules abstraites */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute -top-96 -left-96 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 opacity-20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
        className="absolute -bottom-96 -right-96 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink-700 via-red-700 to-yellow-600 opacity-15 blur-2xl pointer-events-none"
      />

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold tracking-wide mb-14 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
      >
        Leçons Avancées
      </motion.h1>

      {/* Grille des leçons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-4xl px-4 sm:px-0">
        {lessons.map((lesson, i) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.18, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 30px 8px rgba(179, 136, 255, 0.85), 0 0 50px 20px rgba(142, 86, 248, 0.5)",
              backgroundColor: "rgba(120, 81, 245, 0.6)",
            }}
            onClick={() => navigate(`/advanced-lessons/lesson-${lesson.id}`)}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-tr from-purple-800 via-purple-700 to-indigo-800 border border-white/30 p-7 flex flex-col justify-center text-center transition-all shadow-lg"
          >
            {/* Effet néon animé */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px 4px rgba(179, 136, 255, 0.5)",
                  "0 0 30px 8px rgba(179, 136, 255, 1)",
                  "0 0 15px 4px rgba(179, 136, 255, 0.5)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
            />
            <h2 className="text-2xl font-bold drop-shadow-md">{lesson.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Footer explicatif */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-20 max-w-xl text-center text-purple-300 italic drop-shadow-sm"
      >
        Plongez dans les leçons avancées pour maîtriser les subtilités de la langue.
      </motion.p>
    </div>
  );
};

export default AdvancedLessons;
