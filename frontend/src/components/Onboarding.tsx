import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useNavigate } from "react-router-dom";
import '../index.css'; // Assure-toi que le chemin est correct

const Onboarding = () => {
  const { t, lang, setLang } = useLanguage();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    { title: t("welcome"), description: t("welcomeDesc") },
    { title: t("feature1"), description: t("feature1Desc") },
    { title: t("feature2"), description: t("feature2Desc") },
    { title: t("done"), description: t("doneDesc") },
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert(t("onboardingComplete"));
    }
  };

  const handleSignup = () => navigate("/signup");
  const handleLogin = () => navigate("/login");

  const availableLanguages = [
    { code: "us", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "ma", name: "العربية" },

  ];

  return (
    <div
       
      className={`min-h-screen flex flex-col items-center px-8 py-14 text-xl ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >{/* Bulles animées */}
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          width: `${20 + Math.random() * 60}px`,
          height: `${20 + Math.random() * 60}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 20}s`,
          animationDelay: `${Math.random() * 10}s`,
          bottom: `-50px`,
        }}
      />
    ))}
      {/* 🌐 Barre supérieure */}
      <div className="w-full max-w-7xl flex items-center justify-between mb-14 text-xl">
        <div className="flex gap-5">
          <button onClick={handleSignup} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg text-xl">
            {t("signup") || "Inscription"}
          </button>
          <button onClick={handleLogin} className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg text-xl">
            {t("login") || "Se connecter"}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setLang("fr")} className={`flex items-center gap-3 px-5 py-3 rounded-full border font-medium text-lg transition duration-300 shadow-md ${
            lang === "fr" ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-transparent scale-105" : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
          }`}>
            <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-6 h-5 rounded" />
            <span>Français</span>
          </button>
          <button onClick={() => setLang("ar")} className={`flex items-center gap-3 px-5 py-3 rounded-full border font-medium text-lg transition duration-300 shadow-md ${
            lang === "ar" ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white border-transparent scale-105" : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
          }`}>
            <img src="https://flagcdn.com/w40/ma.png" alt="العربية" className="w-6 h-5 rounded" />
            <span>العربية</span>
          </button>
        </div>
      </div>

  {/* Étape principale */}
<div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mb-24">
  <div className="hidden md:flex md:flex-col md:w-1/2 justify-center items-center gap-4 -ml-20"> {/* Plus poussé vers la gauche */}
    <img src="/nigga1-removebg-preview.png" alt="Personnage 1" className="w-72" />
    <img src="/nigga2-removebg-preview.png" alt="Personnage 2" className="w-60" />
  </div>

  <div className="md:w-1/2 w-full text-center md:text-left mt-12 md:mt-0 max-w-xl">
    <h2 className="text-7xl font-extrabold font-serif tracking-tight bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text mb-6">
      {steps[step].title}
    </h2>
    <p className="text-3xl text-gray-800 leading-relaxed mb-8">{steps[step].description}</p>
    <button onClick={nextStep} className="bg-purple-700 hover:bg-purple-800 text-white text-2xl font-semibold py-4 px-8 rounded-xl shadow-lg">
      {step < steps.length - 1 ? t("next") : t("finish")}
    </button>
  </div>
</div>




      {/* Cartes fonctionnalités */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
        {[{ title: t("customStatsTitle"), desc: t("customStatsDesc") }, { title: t("adaptiveQuizTitle"), desc: t("adaptiveQuizDesc") }, { title: t("repetitionDrillsTitle"), desc: t("repetitionDrillsDesc") }, { title: t("weeklyChallengesTitle"), desc: t("weeklyChallengesDesc") }].map((item, i) => (
          <div key={i} className="rounded-2xl p-8 text-center shadow-lg bg-purple-100 text-purple-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-400 text-transparent bg-clip-text">{item.title}</h3>
            <p className="text-xl leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

   <div className="relative mt-28 w-full max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-3xl shadow-lg overflow-hidden">

  {/* Traits décoratifs (divs avec styles) */}
  <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 opacity-30 rotate-12"></div>
  <div className="absolute top-1/2 left-10 w-64 h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 opacity-20 -rotate-6"></div>
  <div className="absolute bottom-10 right-0 w-48 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-25 rotate-3"></div>

  {/* Bulles discrètes */}
  {[...Array(8)].map((_, i) => (
    <span
      key={i}
      className="absolute rounded-full bg-pink-200 opacity-20"
      style={{
        width: `${15 + Math.random() * 30}px`,
        height: `${15 + Math.random() * 30}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        filter: "blur(3px)",
        animation: `floatUp 20s linear infinite`,
        animationDelay: `-${Math.random() * 20}s`,
      }}
    />
  ))}


  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* Bloc 1 */}
    <div className="text-container">
      <h3 className="section-title">{t("freeTitle")}</h3>
      <p className="section-text">{t("freeDesc")}</p>
    </div>
    <div className="image-container">
      <img src="/Thesis.gif" alt="Gratuit" className="section-image" loading="lazy" />
    </div>

    {/* Bloc 2 */}
    <div className="image-container md:order-none order-last">
      <img src="/Exams.gif" alt="Science" className="section-image" loading="lazy" />
    </div>
    <div className="text-container">
      <h3 className="section-title">{t("scienceTitle")}</h3>
      <p className="section-text">{t("scienceDesc")}</p>
    </div>

    {/* Bloc 3 */}
    <div className="text-container">
      <h3 className="section-title">{t("motivationTitle")}</h3>
      <p className="section-text">{t("motivationDesc")}</p>
    </div>
    <div className="image-container">
      <img src="/Learning.gif" alt="Motivation" className="section-image" loading="lazy" />
    </div>
  </div>
</div>






      {/* 🌍 Langues */}
      <div className="mt-28 w-full max-w-7xl px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-700 via-pink-600 to-fuchsia-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg">
          {t("availableLanguages") || "Langues que vous pouvez apprendre"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center text-center px-4">
          {availableLanguages.map((lang, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 w-32 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              title={lang.name}
            >
              <img src={`https://flagcdn.com/w80/${lang.code}.png`} alt={lang.name} className="w-14 h-9 object-cover rounded-md mb-3 mx-auto" loading="lazy" />
              <div className="text-lg font-semibold text-gray-800">{lang.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-white py-14 shadow-xl text-lg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-base font-light opacity-90">
            &copy; {new Date().getFullYear()} Langua360.ai. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-8 font-medium">
            <a href="#privacy" className="hover:underline hover:text-yellow-300 transition-colors duration-300">Politique de confidentialité</a>
            <a href="#terms" className="hover:underline hover:text-yellow-300 transition-colors duration-300">Conditions d'utilisation</a>
            <a href="#contact" className="hover:underline hover:text-yellow-300 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Onboarding;
