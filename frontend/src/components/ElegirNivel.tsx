import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBaby, FaUserGraduate, FaRocket } from "react-icons/fa";

const ElegirNivel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") || "es";

  const handleLevelSelect = (level: string) => {
    if (!lang) {
      alert("Idioma no especificado");
      return;
    }

    // Construire la base de la route selon la langue
    const basePath =
      lang === "es" ? "espagnol" : lang === "en" ? "anglais" : "francais";

    // Naviguer vers la page d'accueil des leçons correspondant au niveau choisi
    navigate(`/${basePath}/${level}`);
  };

  const levels = [
    {
      key: "debutant",
      label: "Principiante",
      icon: <FaBaby size={48} className="text-yellow-700" />,
    },
    {
      key: "intermediaire",
      label: "Intermedio",
      icon: <FaUserGraduate size={48} className="text-yellow-700" />,
    },
    {
      key: "avance",
      label: "Avanzado",
      icon: <FaRocket size={48} className="text-yellow-700" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-500 p-8 overflow-hidden text-yellow-900">
      {/* Fond animé */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
        className="absolute -top-72 -left-72 w-[450px] h-[450px] bg-yellow-700 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 110, ease: "linear" }}
        className="absolute -bottom-72 -right-72 w-[400px] h-[400px] bg-yellow-600 rounded-full opacity-15 blur-2xl"
      />

      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-5xl sm:text-6xl font-extrabold mb-12 text-center drop-shadow-md"
      >
        Elige tu nivel
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-3 w-full max-w-5xl px-4 sm:px-0">
        {levels.map(({ key, label, icon }, i) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 255, 0, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            onClick={() => handleLevelSelect(key)}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-tr from-yellow-600 via-yellow-500 to-yellow-700 shadow-xl border border-yellow-800/50 p-8 flex flex-col items-center justify-center text-center transition-transform select-none"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px 3px rgba(255, 255, 0, 0.6)",
                  "0 0 25px 10px rgba(255, 255, 0, 0.9)",
                  "0 0 15px 3px rgba(255, 255, 0, 0.6)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="rounded-full p-4 mb-6"
            >
              {icon}
            </motion.div>
            <span className="text-2xl font-semibold tracking-wide drop-shadow-md">{label}</span>

            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-yellow-400"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-14 text-center text-yellow-800 italic max-w-xl"
      >
        Elige el nivel que mejor se adapte para comenzar tu aprendizaje.
      </motion.p>
    </div>
  );
};

export default ElegirNivel;
