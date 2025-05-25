import React, { useState } from "react";

const questions = [
  {
    question: "Quel est le synonyme du mot 'rapide' ?",
    options: ["lent", "vite", "lourd", "simple"],
    correctIndex: 1,
  },
  {
    question: "Complétez la phrase : 'Elle ___ toujours en avance.'",
    options: ["arrive", "arrivent", "arrivé", "arrivant"],
    correctIndex: 0,
  },
  {
    question: "Quel temps est utilisé dans la phrase : 'Il avait mangé avant de partir.' ?",
    options: ["passé composé", "futur", "plus-que-parfait", "présent"],
    correctIndex: 2,
  },
  {
    question: "Choisissez l'adverbe correct : 'Il parle très ___.'",
    options: ["vite", "vitesse", "viteuse", "vitement"],
    correctIndex: 0,
  },
  {
    question: "Quel est le féminin de 'acteur' ?",
    options: ["acteuse", "actrice", "acteurre", "acteure"],
    correctIndex: 1,
  },
  {
    question: "Quel est le contraire de 'chaud' ?",
    options: ["brûlant", "froid", "tiède", "doux"],
    correctIndex: 1,
  },
  {
    question: "Quel est le bon ordre : 'matin / se / tôt / lever / je' ?",
    options: [
      "Je se lever tôt matin",
      "Je me lève tôt le matin",
      "Se je lever tôt matin",
      "Je lève me tôt matin"
    ],
    correctIndex: 1,
  },
];

const FrancaisLessonIntermediaire4: React.FC = () => {
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
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300 p-8"
        dir="ltr"
      >
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-red-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Vous avez répondu correctement à{" "}
            <span className="text-green-600">{score}</span> sur{" "}
            <span className="text-red-700">{questions.length}</span> questions.
          </p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setAnswered(false);
              setShowResult(false);
              setIsCorrectAnswer(false);
            }}
            className="mt-10 bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-full shadow-lg font-bold text-xl"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300 p-6 font-sans"
      dir="ltr"
    >
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-red-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-red-700 drop-shadow-md">
          Leçon de français niveau intermédiaire 4 - QCM
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-red-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-red-600 rounded-full transition-all duration-500"
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
                    : "bg-red-700 text-white hover:bg-red-800 active:scale-95"
                }
                focus:outline-none focus:ring-4 focus:ring-red-400`}
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
            {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse."}
          </p>
        )}

        <p className="mt-10 text-center text-red-700 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default FrancaisLessonIntermediaire4;
