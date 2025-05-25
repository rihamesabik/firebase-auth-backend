import React, { useState } from "react";

const questions = [
  {
    question: "Quelle est la différence entre 'depuis', 'pendant' et 'il y a' ?",
    options: [
      "'Depuis' indique une action qui continue, 'pendant' une durée, 'il y a' un moment passé",
      "Tous sont synonymes",
      "'Depuis' et 'pendant' expriment la même chose, 'il y a' non",
      "Aucune différence",
    ],
    correctIndex: 0,
  },
  {
    question: "Comment s’appelle le style d’écriture qui raconte une histoire ?",
    options: ["Narratif", "Descriptif", "Argumentatif", "Informatif"],
    correctIndex: 0,
  },
  {
    question: "Quelle phrase utilise correctement le futur antérieur ?",
    options: [
      "Quand tu arriveras, j’aurai déjà mangé.",
      "Quand tu arriveras, j’ai déjà mangé.",
      "Quand tu arriveras, je mange.",
      "Quand tu arriveras, j’aurai mangé.",
    ],
    correctIndex: 0,
  },
  {
    question: "Quel est le pluriel de « bijou » ?",
    options: ["Bijoux", "Bijous", "Bijoues", "Bijousses"],
    correctIndex: 0,
  },
  {
    question: "Quel mot est un adverbe dans cette phrase : « Il parle rapidement. » ?",
    options: ["rapidement", "parle", "il", "phrase"],
    correctIndex: 0,
  },
  {
    question: "Complétez : « Si j’avais su, je ______ venu plus tôt. »",
    options: ["serais", "serait", "sera", "était"],
    correctIndex: 0,
  },
  {
    question: "Que signifie l’expression « avoir la main verte » ?",
    options: [
      "Être doué pour le jardinage",
      "Être habile de ses mains",
      "Être maladroit",
      "Être chanceux",
    ],
    correctIndex: 0,
  },
];

const FrancaisLessonAvancee3: React.FC = () => {
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
        dir="ltr"
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
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans"
      dir="ltr"
    >
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon de français avancé 3 - Quiz à choix multiples
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

export default FrancaisLessonAvancee3;
