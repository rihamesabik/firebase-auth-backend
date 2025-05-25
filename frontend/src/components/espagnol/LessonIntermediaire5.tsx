import React, { useState } from "react";

const LessonIntermediaire5: React.FC = () => {
  const questions = [
    {
      question: "Que signifie le mot espagnol 'desempeñar' ?",
      options: ["Jouer un rôle", "Dormir", "Nettoyer", "Oublier"],
      correctIndex: 0,
    },
    {
      question: "Comment traduit-on 'desafío' en français ?",
      options: ["Défi", "Erreur", "Succès", "Avantage"],
      correctIndex: 0,
    },
    {
      question: "Le mot 'alcanzar' signifie :",
      options: ["Atteindre", "Réparer", "Lire", "Réfléchir"],
      correctIndex: 0,
    },
    {
      question: "Quel est le sens de 'herramienta' ?",
      options: ["Outil", "Chaise", "Boîte", "Chemin"],
      correctIndex: 0,
    },
    {
      question: "Que veut dire 'aprovechar' ?",
      options: ["Profiter", "Perdre", "Acheter", "Changer"],
      correctIndex: 0,
    },
    {
      question: "Le mot 'fomentar' signifie :",
      options: ["Encourager", "Punir", "Observer", "Interdire"],
      correctIndex: 0,
    },
    {
      question: "Que signifie 'logro' ?",
      options: ["Réussite", "Jeu", "Perte", "Oubli"],
      correctIndex: 0,
    },
    {
      question: "Traduction correcte de 'riesgo' ?",
      options: ["Risque", "Soleil", "Bruit", "Voix"],
      correctIndex: 0,
    },
    {
      question: "Que veut dire 'desarrollar' ?",
      options: ["Développer", "Arrêter", "Voler", "Nettoyer"],
      correctIndex: 0,
    },
    {
      question: "Traduction de 'proveer' :",
      options: ["Fournir", "Casser", "Regarder", "Manger"],
      correctIndex: 0,
    },
    {
      question: "Que signifie 'empresa' ?",
      options: ["Entreprise", "Famille", "Lettre", "Forêt"],
      correctIndex: 0,
    },
    {
      question: "Le mot 'entorno' signifie :",
      options: ["Environnement", "Ennemi", "Écran", "Horloge"],
      correctIndex: 0,
    },
    {
      question: "Comment traduit-on 'meta' ?",
      options: ["Objectif", "Règle", "Main", "Bière"],
      correctIndex: 0,
    },
    {
      question: "Que signifie 'alcance' ?",
      options: ["Portée", "Mémoire", "Voiture", "Sable"],
      correctIndex: 0,
    },
    {
      question: "Le mot 'recursos' veut dire :",
      options: ["Ressources", "Résultats", "Recettes", "Retraites"],
      correctIndex: 0,
    },
    {
      question: "Que signifie 'logística' ?",
      options: ["Logistique", "Magie", "Cuisine", "Médecine"],
      correctIndex: 0,
    },
    {
      question: "Traduction de 'inversión' :",
      options: ["Investissement", "Inversion", "Incision", "Indépendance"],
      correctIndex: 0,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setAnswered(true);

    const correct = index === questions[current].correctIndex;
    setIsCorrectAnswer(correct);
    if (correct) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setAnswered(false);
        setIsCorrectAnswer(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const progressPercent = (current / questions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Tu as répondu correctement à{" "}
            <span className="text-green-600">{score}</span> question
            {score > 1 ? "s" : ""} sur{" "}
            <span className="text-purple-700">{questions.length}</span>.
          </p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setAnswered(false);
              setShowResult(false);
              setIsCorrectAnswer(false);
            }}
            className="mt-10 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full shadow-lg font-bold text-xl"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-400 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon Intermédiaire 5 : Vocabulaire avancé espagnol
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-2xl mb-8 text-center text-gray-900 font-semibold leading-relaxed">
          {current + 1}. {questions[current].question}
        </p>

        <div className="grid gap-5">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={answered}
              className={`
                py-4 rounded-xl text-xl font-semibold shadow-md transition duration-300
                ${
                  answered
                    ? idx === questions[current].correctIndex
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-700 text-white hover:bg-purple-800 active:scale-95"
                }
                focus:outline-none focus:ring-4 focus:ring-purple-400
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <p
            className={`mt-8 text-center text-2xl font-bold ${
              isCorrectAnswer ? "text-green-600" : "text-red-600"
            } animate-pulse`}
          >
            {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse, essaie encore."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default LessonIntermediaire5;
