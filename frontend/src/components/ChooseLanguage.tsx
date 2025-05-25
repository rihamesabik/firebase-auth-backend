import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia, FaLanguage } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { motion } from "framer-motion";

const ChooseLanguage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLanguageSelect = (lang: string) => {
    setLoading(true);
    setTimeout(() => {
      if (lang === "en") {
        navigate(`/choose-level?lang=${lang}`);
      } else if (lang === "fr") {
        navigate(`/choisir-niveau?lang=${lang}`);
      } else if (lang === "es") {
        navigate(`/elegir-nivel?lang=${lang}`);
      } else if (lang === "ar") {
        navigate(`/اختيار-المستوى?lang=${lang}`);
      }
    }, 1000);
  };

  const buttons = [
    { lang: "en", label: "English", icon: <FaGlobeAmericas /> },
    { lang: "fr", label: "Français", icon: <FaGlobeEurope /> },
    { lang: "es", label: "Español", icon: <FaLanguage /> },
    { lang: "ar", label: "العربية", icon: <FaGlobeAsia /> },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-300 overflow-hidden text-purple-900 select-none">
      {/* Fond animé avec plusieurs formes */}
      <motion.div
        className="absolute -top-48 -left-48 w-96 h-96 bg-purple-600 opacity-30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"
        style={{ filter: "drop-shadow(0 0 30px #a855f7)" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-pink-500 opacity-30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"
        style={{ filter: "drop-shadow(0 0 30px #ec4899)" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 bg-yellow-400 opacity-20 rounded-full blur-xl animate-[pulse_7s_ease-in-out_infinite]"
        style={{ filter: "drop-shadow(0 0 20px #facc15)" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-60 h-60 bg-pink-400 opacity-25 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite]"
        style={{ filter: "drop-shadow(0 0 25px #f472b6)" }}
      />

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold mb-12 text-center tracking-wide drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
        style={{ textShadow: "0 0 8px #8b5cf6, 0 0 12px #c084fc" }}
      >
        🌍 Choose Your Language / Choisissez votre langue / اختر لغتك
      </motion.h1>

      {/* Boutons langues */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md w-full px-6"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {buttons.map(({ lang, label, icon }) => (
          <motion.button
            key={lang}
            onClick={() => handleLanguageSelect(lang)}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 15px 4px rgba(139,92,246,0.7)",
              textShadow: "0 0 8px rgba(139,92,246,0.9)",
              backgroundColor: "#a78bfa",
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-between gap-4 px-8 py-5 bg-white rounded-3xl font-bold shadow-lg cursor-pointer
              text-purple-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400
              hover:shadow-[0_0_20px_6px_rgba(139,92,246,0.7)]"
            aria-label={`Select language ${label}`}
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-xl">{label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Spinner loading */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex items-center text-purple-900 font-bold text-2xl gap-4 select-text"
        >
          <ImSpinner8 className="animate-spin text-5xl text-purple-700 drop-shadow-lg" />
          <span className="drop-shadow-lg">Loading...</span>
        </motion.div>
      )}

      {/* Décorations supplémentaires flottantes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-10 left-10 text-purple-400 opacity-30 text-7xl select-none"
        aria-hidden="true"
      >
        🌐
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 right-14 text-pink-400 opacity-25 text-8xl select-none"
        aria-hidden="true"
      >
        🌎
      </motion.div>
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/3 text-yellow-400 opacity-20 text-9xl select-none"
        aria-hidden="true"
      >
        🗺️
      </motion.div>
    </div>
  );
};

export default ChooseLanguage;
