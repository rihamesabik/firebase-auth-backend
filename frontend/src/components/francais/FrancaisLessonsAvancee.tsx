import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FrancaisLessonsAvancee: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    { id: 1, title: "Leçon 1 : La subordination complexe" },
    { id: 2, title: "Leçon 2 : Les registres de langue" },
    { id: 3, title: "Leçon 3 : L’analyse de texte" },
    { id: 4, title: "Leçon 4 : Les figures de style avancées" },
    { id: 5, title: "Leçon 5 : Le discours indirect" },
    { id: 6, title: "Leçon 6 : La cohérence textuelle" },
    { id: 7, title: "Leçon 7 : La rhétorique et la persuasion" },
  ];

  const lessonPath = (id: number) => `/francais/avancee/lesson-${id}`;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-green-900 via-green-700 to-teal-800 p-8 overflow-hidden text-white flex flex-col items-center">
      {/* Fond animé */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-gradient-to-tr from-lime-600 via-green-700 to-teal-700 rounded-full opacity-30 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute -bottom-96 -right-96 w-[550px] h-[550px] bg-gradient-to-br from-yellow-400 via-green-500 to-lime-600 rounded-full opacity-25 blur-2xl pointer-events-none"
      />

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-14 drop-shadow-lg"
      >
        Leçons Avancées - Français
      </motion.h1>

      {/* Grid des leçons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-6 sm:px-0">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(255, 255, 255, 0.8)" }}
            onClick={() => navigate(lessonPath(lesson.id))}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-tr from-green-700 via-green-600 to-teal-700 shadow-2xl border border-white/30 p-8 flex flex-col justify-center text-center select-none transition-all"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px 4px rgba(144, 238, 144, 0.7)",
                  "0 0 35px 10px rgba(144, 238, 144, 1)",
                  "0 0 20px 4px rgba(144, 238, 144, 0.7)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
            />
            <h2 className="text-2xl font-bold text-white drop-shadow-md">{lesson.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Message en bas */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-14 max-w-xl text-center text-green-300 italic drop-shadow-md"
      >
        Cliquez sur une leçon pour approfondir vos connaissances !
      </motion.p>
    </div>
  );
};

export default FrancaisLessonsAvancee;
