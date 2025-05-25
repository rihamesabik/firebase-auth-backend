import React, { useState, useRef, useEffect } from "react";

const questions = [
  {
    question: "Comment dit-on 'Je mange' en espagnol ?",
    options: ["Yo como", "Yo como", "Yo comer", "Yo comí"],
    correctIndex: 0,
  },
  {
    question: "Quel est le verbe 'être' au présent en espagnol pour 'tu' ?",
    options: ["Eres", "Es", "Soy", "Son"],
    correctIndex: 0,
  },
  {
    question: "Comment dit-on 'Nous parlons' ?",
    options: ["Nosotros hablamos", "Nosotros hablar", "Nosotros hablan", "Nosotros hablas"],
    correctIndex: 0,
  },
  {
    audio: "/audio/yo_como.mp3",
    question: "Écoute et choisis la bonne traduction de l'audio :",
    options: ["Je mange", "Je bois", "Je cours", "Je dors"],
    correctIndex: 0,
  },
  {
    question: "Quelle est la bonne conjugaison du verbe 'vivir' pour 'nosotros' ?",
    options: ["Vivimos", "Viven", "Vivo", "Vivís"],
    correctIndex: 0,
  },
  {
    audio: "/audio/nosotros_hablamos.mp3",
    question: "Que signifie 'Nosotros hablamos' ?",
    options: ["Nous chantons", "Nous courons", "Nous parlons", "Nous dormons"],
    correctIndex: 2,
  },
  {
    question: "Quel pronom correspond à 'ils' en espagnol ?",
    options: ["Ellos", "Nosotros", "Tú", "Yo"],
    correctIndex: 0,
  }
];


  
  const LessonIntermediaire1: React.FC = () => {
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-200 p-8">
          <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
            <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
              🏆 Résultat 🏆
            </h2>
            <p className="text-3xl text-gray-800 font-semibold">
              Tu as obtenu{" "}
              <span className="text-green-600">{score}</span> sur{" "}
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
  
    const progressPercent = (current / questions.length) * 100;
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 p-6 font-sans">
        <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-400 animate-fadeIn">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-700 drop-shadow-md">
            Leçon Intermédiaire 2 - Temps passés (Espagnol)
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
                        ? "bg-green-500 text-white shadow-lg scale-105"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
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
  
          <p className="mt-10 text-center text-purple-700 font-semibold text-lg tracking-wide">
            Question {current + 1} sur {questions.length}
          </p>
        </div>
      </div>
    );
  };
export default LessonIntermediaire1;