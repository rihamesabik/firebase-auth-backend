import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  BarChart,
  Heart,
  BookOpen,
  Mic,
  BarChart2,
  Award,
  Settings,
  Globe,
  ChevronDown,
  CheckCircle,
  Clock,
  Book,
} from "lucide-react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const translations = {
  fr: {
    sidebarTitle: "Langua360",
    mesCours: "Mes cours",
    coachIA: "Coach IA",
    quizEvaluations: "Quiz & Évaluations",
    mesStatistiques: "Mes statistiques",
    badgesMotivation: "Badges & Motivation",
    parametres: "Paramètres",
    seDeconnecter: "Se déconnecter",
    rechercher: "Rechercher...",
    langue: "FR",
    bienvenue: "Bienvenue",
    tableauDeBordTexte: "Voici votre tableau de bord avec vos statistiques.",
    progresGlobal: "Progrès global",
    apprentissageSemaine: "Apprentissage cette semaine",
    votreStreak: "Votre Streak",
    joursConsecutifs: "jours consécutifs",
    tempsPasse: "Temps passé",
    heuresSemaine: "heures cette semaine",
    quizReussis: "Quiz réussis",
    motsAppris: "Mots appris",
    mots: "mots",
    modifierProfil: "Modifier le Profil",
  },
  ar: {
    sidebarTitle: "لانغوا360",
    mesCours: "دروسي",
    coachIA: "المدرب الذكي",
    quizEvaluations: "اختبارات وتقييمات",
    mesStatistiques: "إحصائياتي",
    badgesMotivation: "الشارات والتحفيز",
    parametres: "الإعدادات",
    seDeconnecter: "تسجيل الخروج",
    rechercher: "بحث...",
    langue: "ع",
    bienvenue: "مرحبا",
    tableauDeBordTexte: "هذه لوحة التحكم الخاصة بك مع إحصائياتك.",
    progresGlobal: "التقدم العام",
    apprentissageSemaine: "التعلم هذا الأسبوع",
    votreStreak: "سلسلة الأيام",
    joursConsecutifs: "أيام متتالية",
    tempsPasse: "الوقت المستغرق",
    heuresSemaine: "ساعات هذا الأسبوع",
    quizReussis: "الاختبارات الناجحة",
    motsAppris: "الكلمات المكتسبة",
    mots: "كلمة",
    modifierProfil: "تعديل الملف الشخصي",
  },
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    progress: 0,
    streak: 0,
    timeSpent: 0,
    quizzesPassed: 0,
    wordsLearned: 0,
  });

  const [lang, setLang] = useState<"fr" | "ar">("fr");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    const progress = localStorage.getItem("progress");
    const streak = localStorage.getItem("streak");
    const timeSpent = localStorage.getItem("timeSpent");
    const quizzesPassed = localStorage.getItem("quizzesPassed");
    const wordsLearned = localStorage.getItem("wordsLearned");

    if (userName && userEmail) {
      setUserInfo({
        name: userName,
        email: userEmail,
        progress: Number(progress) || 0,
        streak: Number(streak) || 0,
        timeSpent: Number(timeSpent) || 0,
        quizzesPassed: Number(quizzesPassed) || 0,
        wordsLearned: Number(wordsLearned) || 0,
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const t = translations[lang];

  return (
    <div className="flex min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 border-r flex flex-col justify-between">
        <div>
          <div className="text-3xl font-extrabold text-purple-700 mb-10 tracking-wider select-none">
            {t.sidebarTitle}
          </div>
          <nav className="space-y-5 text-gray-700">
           {[
  { icon: <BookOpen size={20} />, label: t.mesCours, path: "/choose-language" },
  { icon: <Mic size={20} />, label: t.coachIA },
  { icon: <BarChart2 size={20} />, label: t.quizEvaluations },
  { icon: <BarChart size={20} />, label: t.mesStatistiques },
  { icon: <Award size={20} />, label: t.badgesMotivation },
].map(({ icon, label, path }, i) => (
  <div
    key={i}
    onClick={() => path && navigate(path)}  // si path défini, navigate vers cette route
    className="flex items-center gap-4 cursor-pointer px-4 py-3 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition duration-300"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
))}


            {/* Paramètres avec menu déroulant */}
            <div className="relative group mt-6">
              <div className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition duration-300">
                <Settings size={20} /> <span className="font-medium">{t.parametres}</span>
              </div>
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-purple-100 font-semibold text-purple-700"
                >
                  {t.seDeconnecter}
                </button>
              </div>
            </div>
          </nav>
        </div>

        <footer className="mt-10 px-4">
          <button
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full border border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
          >
            <Globe size={16} /> {t.langue} <ChevronDown size={14} />
          </button>
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gradient-to-br from-purple-100 via-white to-purple-50 p-10 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <input
            type="text"
            placeholder={t.rechercher}
            className="px-5 py-3 rounded-full border border-purple-300 w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
          />
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 cursor-pointer text-purple-700 font-semibold select-none">
              <User size={28} />
              <span className="text-lg">{userInfo.name}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-extrabold text-purple-700 animate-fadeInDown">
              {t.bienvenue} {userInfo.name}!
            </h1>
            <p className="text-md text-gray-600 mt-2 animate-fadeIn delay-200">
              {t.tableauDeBordTexte}
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Progress */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-between animate-fadeInUp delay-100">
              <div className="w-28 h-28 drop-shadow-lg">
                <CircularProgressbar
                  value={userInfo.progress}
                  text={`${userInfo.progress}%`}
                  styles={buildStyles({
                    textColor: "#6D28D9",
                    pathColor: "#7C3AED",
                    trailColor: "#EDE9FE",
                    textSize: "18px",
                    pathTransitionDuration: 1.5,
                  })}
                />
              </div>
              <div className="ml-8 max-w-xs">
                <h2 className="text-xl font-semibold text-purple-700">{t.progresGlobal}</h2>
                <p className="text-gray-500 mt-1 text-sm">{t.apprentissageSemaine}</p>
              </div>
            </div>

            {/* Streak */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6 animate-fadeInUp delay-200">
              <Heart className="text-red-500 animate-pulse" size={44} />
              <div>
                <h2 className="text-xl font-semibold text-purple-700">{t.votreStreak}</h2>
                <p className="text-gray-600 text-sm">
                  {userInfo.streak} {t.joursConsecutifs}
                </p>
              </div>
            </div>

            {/* Time Spent */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6 animate-fadeInUp delay-300">
              <Clock className="text-blue-500" size={44} />
              <div>
                <h2 className="text-xl font-semibold text-purple-700">{t.tempsPasse}</h2>
                <p className="text-gray-600 text-sm">
                  {userInfo.timeSpent} {t.heuresSemaine}
                </p>
              </div>
            </div>

            {/* Quizzes Passed */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6 animate-fadeInUp delay-400">
              <CheckCircle className="text-green-500" size={44} />
              <div>
                <h2 className="text-xl font-semibold text-purple-700">{t.quizReussis}</h2>
                <p className="text-gray-600 text-sm">{userInfo.quizzesPassed}</p>
              </div>
            </div>

            {/* Words Learned */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6 animate-fadeInUp delay-500">
              <Book className="text-yellow-500" size={44} />
              <div>
                <h2 className="text-xl font-semibold text-purple-700">{t.motsAppris}</h2>
                <p className="text-gray-600 text-sm">
                  {userInfo.wordsLearned} {t.mots}
                </p>
              </div>
            </div>

            {/* Modifier Profil */}
            <button
              onClick={() => navigate("/profile")}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-3xl py-4 flex items-center justify-center gap-3 shadow-md transition duration-300 animate-pulse"
            >
              <User size={24} /> {t.modifierProfil}
            </button>
          </div>
        </section>
        
      </main>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.6s ease forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
