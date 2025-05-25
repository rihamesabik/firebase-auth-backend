import React, { useState } from "react";

const questions = [
  {
    question: "Comment dit-on 'Bonjour' en espagnol ?",
    options: ["Adiós", "Hola", "Gracias", "Buenas noches"],
    correctIndex: 1,
  },
  {
    question: "Comment dit-on 'Bonsoir' en espagnol ?",
    options: ["Hola", "Adiós", "Buenas noches", "Buenos días"],
    correctIndex: 2,
  },
  {
    question: "Comment dit-on 'Bonne nuit' en espagnol ?",
    options: ["Buenas noches", "Gracias", "Hola", "Hasta luego"],
    correctIndex: 0,
  },
  {
    question: "Comment dit-on 'Bonne après-midi' en espagnol ?",
    options: ["Hola", "Gracias", "Buenas tardes", "Adiós"],
    correctIndex: 2,
  },
  {
    question: "Comment dit-on 'Au revoir' en espagnol ?",
    options: ["Gracias", "Adiós", "Hola", "Buenas tardes"],
    correctIndex: 1,
  },
  {
    question: "Comment dit-on 'À bientôt' en espagnol ?",
    options: ["Hola", "Hasta pronto", "Por favor", "Gracias"],
    correctIndex: 1,
  },
  {
    question: "Comment dit-on 'À plus tard' en espagnol ?",
    options: ["Buenos días", "Lo siento", "Hasta luego", "Hasta mañana"],
    correctIndex: 2,
  },
  {
    question: "Comment dit-on 'À demain' en espagnol ?",
    options: ["Hasta luego", "Buenas noches", "Hasta mañana", "Hola"],
    correctIndex: 2,
  },
  {
    question: "Quelle est une salutation informelle en espagnol ?",
    options: ["Qué tal", "Gracias", "De nada", "Buenos días"],
    correctIndex: 0,
  },
  {
    question: "Comment saluer un ami en espagnol ?",
    options: ["Por favor", "Hola", "Lo siento", "Adiós"],
    correctIndex: 1,
  },
  {
    question: "Quelle expression signifie 'Comment ça va ?' en espagnol ?",
    options: ["¿Qué es eso?", "¿Cómo estás?", "¿Dónde estás?", "¿Quién eres?"],
    correctIndex: 1,
  },
  {
    question: "Quelle est la bonne réponse à '¿Cómo estás?' ?",
    options: ["Hasta pronto", "Buenos días", "Estoy bien", "Hola"],
    correctIndex: 2,
  },
  {
    question: "Quelle salutation utilise-t-on le matin ?",
    options: ["Hola", "Hasta luego", "Buenos días", "Buenas noches"],
    correctIndex: 2,
  },
  {
    question: "Quelle salutation utilise-t-on le soir ?",
    options: ["Buenos días", "Hola", "Hasta luego", "Buenas noches"],
    correctIndex: 3,
  },
  {
    question: "Quelle salutation est formelle en espagnol ?",
    options: ["Qué tal", "Hola", "Buenos días", "Chao"],
    correctIndex: 2,
  },
];

const LessonDebutant1: React.FC = () => {
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Vous avez répondu correctement à{" "}
            <span className="text-green-600">{score}</span> question(s) sur{" "}
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
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = (current / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon Espagnol Débutant 1 - QCM interactif
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
            {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse, réessayez."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default LessonDebutant1;
