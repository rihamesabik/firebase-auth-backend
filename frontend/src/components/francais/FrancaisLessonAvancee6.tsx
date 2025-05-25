import React, { useState } from "react";

const questions = [
  {
    question: "Quel est le synonyme de « subtil » ?",
    options: ["Fin", "Grossier", "Brut", "Simple"],
    correctIndex: 0,
  },
  {
    question: "Dans quelle phrase utilise-t-on le plus-que-parfait ?",
    options: [
      "J’avais fini avant toi.",
      "Je finis demain.",
      "Je finis maintenant.",
      "Je finirai plus tard.",
    ],
    correctIndex: 0,
  },
  {
    question: "Quelle est la nature grammaticale du mot « rapidement » ?",
    options: ["Adverbe", "Nom", "Adjectif", "Verbe"],
    correctIndex: 0,
  },
  {
    question: "Quelle phrase est une interrogation directe ?",
    options: [
      "Où vas-tu ?",
      "Je sais où tu vas.",
      "Je me demande où tu vas.",
      "Tu vas où.",
    ],
    correctIndex: 0,
  },
  {
    question: "Que signifie l’expression « avoir la tête dans les nuages » ?",
    options: [
      "Être distrait",
      "Être concentré",
      "Être fatigué",
      "Être en colère",
    ],
    correctIndex: 0,
  },
  {
    question: "Quel est l'antonyme de « rare » ?",
    options: ["Commun", "Rare", "Unique", "Spécial"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la forme correcte du verbe au subjonctif présent dans la phrase : « Il faut que tu ___ venir. » ?",
    options: ["viennes", "viens", "vient", "venez"],
    correctIndex: 0,
  },
];

const FrancaisLessonAvancee6: React.FC = () => {
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
    if (correct) setScore((s) => s + 1);

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
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-8"
        dir="rtl"
      >
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultats 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Vous avez répondu correctement à{" "}
            <span className="text-green-600">{score}</span> questions sur{" "}
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
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon de français avancé 6 - Quiz à choix multiples
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-2xl mb-8 text-center text-gray-900 font-semibold leading-relaxed">
          {questions[current].question}
        </p>

        <div className="grid gap-5" dir="ltr">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={answered}
              className={`py-4 rounded-xl text-xl font-semibold shadow-md transition duration-300
                ${
                  answered
                    ? idx === questions[current].correctIndex
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-700 text-white hover:bg-purple-800 active:scale-95"
                }
                focus:outline-none focus:ring-4 focus:ring-purple-400`}
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
            {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse, essayez encore."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default FrancaisLessonAvancee6;
