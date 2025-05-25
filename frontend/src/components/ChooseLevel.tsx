import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBaby, FaUserGraduate, FaRocket } from "react-icons/fa";

const ChooseLevel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") || "fr";

  const handleLevelSelect = (level: string) => {
    if (level === "debutant") {
      navigate("/beginner-lessons");
    } else if (level === "intermediaire") {
      navigate("/intermediate-lessons");
    } else if (level === "avance") {
      navigate("/advanced-lessons");
    } else {
      navigate(`/dashboard?lang=${lang}&level=${level}`);
    }
  };

  const levels = [
    {
      key: "debutant",
      label: lang === "ar" ? "مبتدئ" : "Débutant",
      icon: <FaBaby size={48} className="text-purple-700" />,
    },
    {
      key: "intermediaire",
      label: lang === "ar" ? "متوسط" : "Intermédiaire",
      icon: <FaUserGraduate size={48} className="text-purple-700" />,
    },
    {
      key: "avance",
      label: lang === "ar" ? "متقدم" : "Avancé",
      icon: <FaRocket size={48} className="text-purple-700" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-900 via-purple-700 to-indigo-800 p-8 overflow-hidden text-white">
      {/* Fond décoratif animé */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-72 -left-72 w-[450px] h-[450px] bg-gradient-to-tr from-pink-500 via-purple-700 to-indigo-600 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute -bottom-72 -right-72 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 rounded-full opacity-25 blur-2xl"
      />

      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-5xl sm:text-6xl font-extrabold mb-12 text-center drop-shadow-lg"
      >
        {lang === "ar" ? "اختر المستوى" : "Choisissez votre niveau"}
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-3 w-full max-w-6xl px-4 sm:px-0">
        {levels.map(({ key, label, icon }, i) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            onClick={() => handleLevelSelect(key)}
            className="relative cursor-pointer rounded-3xl bg-gradient-to-tr from-purple-800 via-purple-600 to-purple-900 shadow-xl border border-white/30 p-8 flex flex-col items-center justify-center text-center transition-transform select-none"
          >
            {/* Halo animé autour de l'icône */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px 3px rgba(167, 139, 250, 0.6)",
                  "0 0 25px 10px rgba(167, 139, 250, 0.9)",
                  "0 0 15px 3px rgba(167, 139, 250, 0.6)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="rounded-full p-4 mb-6"
            >
              {icon}
            </motion.div>
            <span className="text-2xl font-semibold tracking-wide drop-shadow-md">{label}</span>

            {/* Petite barre décorative animée */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-pink-400"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Footer ou message optionnel */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-14 text-center text-purple-300 italic max-w-xl"
      >
        {lang === "ar"
          ? "اختر المستوى الذي يناسبك لتبدأ رحلتك التعليمية"
          : "Choisissez le niveau qui vous convient pour commencer votre parcours d’apprentissage"}
      </motion.p>
    </div>
  );
};

export default ChooseLevel;
