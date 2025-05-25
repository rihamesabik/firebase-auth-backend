import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const IntermediateLessons: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    { id: 1, title: "Leçon 1 : Thème intermédiaire 1" },
    { id: 2, title: "Leçon 2 : Thème intermédiaire 2" },
    { id: 3, title: "Leçon 3 : Thème intermédiaire 3" },
    { id: 4, title: "Leçon 4 : Thème intermédiaire 4" },
    { id: 5, title: "Leçon 5 : Thème intermédiaire 5" },
    { id: 6, title: "Leçon 6 : Thème intermédiaire 6" },
    { id: 7, title: "Leçon 7 : Thème intermédiaire 7" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 p-10 flex flex-col items-center overflow-hidden text-white select-none">
      
      {/* Fond animé abstrait */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute -top-96 -left-96 w-[700px] h-[700px] bg-gradient-to-tr from-pink-600 via-purple-700 to-indigo-800 rounded-full opacity-25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 110, ease: "linear" }}
        className="absolute -bottom-96 -right-96 w-[650px] h-[650px] bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 rounded-full opacity-20 blur-2xl pointer-events-none"
      />

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-5xl font-extrabold mb-16 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      >
        Leçons Intermédiaire
      </motion.h1>

      {/* Grille des leçons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-6 sm:px-0">
        {lessons.map((lesson, i) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px 5px rgba(255,255,255,0.8)" }}
            onClick={() => navigate(`/intermediate-lessons/lesson-${lesson.id}`)}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-700 shadow-2xl border border-white/40 p-8 flex flex-col justify-center text-center transition-all"
          >
            {/* Halo animé autour */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 25px 6px rgba(195, 168, 255, 0.6)",
                  "0 0 40px 10px rgba(195, 168, 255, 1)",
                  "0 0 25px 6px rgba(195, 168, 255, 0.6)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
            />
            <h2 className="text-2xl font-bold drop-shadow-lg">{lesson.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Petit footer texte */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-16 max-w-xl text-center text-purple-300 italic drop-shadow-md"
      >
        Choisissez une leçon et plongez dans le niveau intermédiaire !
      </motion.p>
    </div>
  );
};

export default IntermediateLessons;
