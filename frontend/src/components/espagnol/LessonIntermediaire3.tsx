import React, { useState } from "react";

const questions = [
  {
    question: "Quel est le pronom personnel pour 'je' ?",
    options: ["Yo", "Tú", "Él", "Nosotros"],
    correctIndex: 0,
  },
  {
    question: "Quel est le pronom pour 'tu' (informel) ?",
    options: ["Tú", "Usted", "Vosotros", "Ella"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'il' ?",
    options: ["Él", "Ella", "Ellos", "Nosotros"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'elle' ?",
    options: ["Ella", "Él", "Usted", "Vosotras"],
    correctIndex: 0,
  },
  {
    question: "Quel pronom signifie 'nous' ?",
    options: ["Nosotros", "Ellos", "Ustedes", "Vosotros"],
    correctIndex: 0,
  },
  {
    question: "Quel est le pronom pour 'vous' (formel singulier) ?",
    options: ["Usted", "Tú", "Vosotros", "Él"],
    correctIndex: 0,
  },
  {
    question: "Quel pronom désigne 'vous' (pluriel informel en Espagne) ?",
    options: ["Vosotros", "Ustedes", "Nosotros", "Ellos"],
    correctIndex: 0,
  },
  {
    question: "Comment dit-on 'elles' ?",
    options: ["Ellas", "Ellos", "Nosotras", "Vosotras"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'ils' ?",
    options: ["Ellos", "Ellas", "Él", "Ustedes"],
    correctIndex: 0,
  },
  {
    question: "Quel est le pronom réfléchi pour 'je' ?",
    options: ["Me", "Te", "Se", "Nos"],
    correctIndex: 0,
  },
  {
    question: "Quel pronom réfléchi correspond à 'tu' ?",
    options: ["Te", "Me", "Nos", "Se"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'nous nous' (réfléchi) ?",
    options: ["Nos", "Os", "Se", "Te"],
    correctIndex: 0,
  },
  {
    question: "Quel pronom objet direct signifie 'le' (masculin singulier) ?",
    options: ["Lo", "La", "Los", "Las"],
    correctIndex: 0,
  },
  {
    question: "Quel est le pronom objet direct pour 'les' (féminin pluriel) ?",
    options: ["Las", "Los", "La", "Nos"],
    correctIndex: 0,
  },
  {
    question: "Quel pronom objet indirect signifie 'à lui / à elle' ?",
    options: ["Le", "Lo", "Se", "Nos"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'à nous' (objet indirect) ?",
    options: ["Nos", "Les", "Se", "Os"],
    correctIndex: 0,
  },
  {
    question: "Quel est le pronom pour 'à vous' (Espagne, pluriel informel) ?",
    options: ["Os", "Les", "Vos", "Ustedes"],
    correctIndex: 0,
  },
];

const LessonIntermediaire3: React.FC = () => {
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

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Bravo ! 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Tu as répondu correctement à{" "}
            <span className="text-purple-600">{score}</span> questions sur{" "}
            <span className="text-purple-700">{questions.length}</span>.
          </p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setShowResult(false);
              setAnswered(false);
              setIsCorrectAnswer(false);
            }}
            className="mt-10 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full shadow-lg font-bold text-xl"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon Intermédiaire 3 : Pronoms - QCM
        </h1>

        {/* Barre de progression */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-2xl mb-8 text-center text-gray-900 font-semibold leading-relaxed">
          {questions[current].question}
        </p>

        <div className="grid gap-5">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={answered}
              className={`
                py-4 rounded-xl text-xl font-semibold shadow-md transition 
                duration-300
                ${
                  answered
                    ? idx === questions[current].correctIndex
                      ? "bg-purple-500 text-white shadow-lg scale-105"
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
              isCorrectAnswer ? "text-purple-600" : "text-red-600"
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

export default LessonIntermediaire3;
