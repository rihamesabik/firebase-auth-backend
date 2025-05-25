import React, { useState } from "react";

const LessonIntermediaire4: React.FC = () => {
  const questions = [
    { question: "Quelle préposition espagnole signifie 'à' ?", options: ["A", "De", "En", "Por"], correctIndex: 0 },
    { question: "Comment dire 'de' en espagnol ?", options: ["De", "Con", "Sobre", "Hasta"], correctIndex: 0 },
    { question: "Quelle est la préposition pour 'avec' ?", options: ["Con", "Para", "Sin", "Entre"], correctIndex: 0 },
    { question: "Comment traduire 'sans' ?", options: ["Sin", "Sobre", "A", "Desde"], correctIndex: 0 },
    { question: "Comment dire 'sur' ou 'au sujet de' ?", options: ["Sobre", "Por", "En", "Tras"], correctIndex: 0 },
    { question: "Quelle préposition signifie 'en' ou 'dans' ?", options: ["En", "A", "Hacia", "Entre"], correctIndex: 0 },
    { question: "Comment dire 'entre' ?", options: ["Entre", "Tras", "Contra", "Desde"], correctIndex: 0 },
    { question: "Quelle préposition correspond à 'depuis' ?", options: ["Desde", "Hasta", "Hacia", "Por"], correctIndex: 0 },
    { question: "Comment dire 'jusqu’à' ?", options: ["Hasta", "Por", "Sin", "De"], correctIndex: 0 },
    { question: "Quelle est la préposition pour 'vers' ?", options: ["Hacia", "Con", "Sobre", "Sin"], correctIndex: 0 },
    { question: "Comment traduire 'contre' ?", options: ["Contra", "Sobre", "Desde", "En"], correctIndex: 0 },
    { question: "Quelle préposition signifie 'pour' ?", options: ["Para", "Por", "Con", "A"], correctIndex: 0 },
    {
      question: "Quelle est la différence principale entre 'por' et 'para' ?",
      options: [
        "'Por' indique une cause, 'para' une destination",
        "'Por' indique une destination, 'para' une cause",
        "Elles sont toujours interchangeables",
        "'Por' signifie 'sans', 'para' signifie 'avec'",
      ],
      correctIndex: 0,
    },
    { question: "Comment traduire 'grâce à' ?", options: ["Gracias a", "Por eso", "Hasta", "En lugar de"], correctIndex: 0 },
    { question: "Quelle est la préposition pour dire 'au lieu de' ?", options: ["En lugar de", "En vez de", "Sobre", "Entre"], correctIndex: 0 },
    { question: "Comment dire 'au-dessus de' ?", options: ["Encima de", "Debajo de", "Dentro de", "Detrás de"], correctIndex: 0 },
    { question: "Comment dire 'derrière' ?", options: ["Detrás de", "Delante de", "Sobre", "Entre"], correctIndex: 0 },
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

export default LessonIntermediaire4;
