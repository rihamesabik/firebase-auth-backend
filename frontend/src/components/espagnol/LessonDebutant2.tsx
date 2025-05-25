import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const questions = [
  {
    question: "Que signifie « lunes » en français ?",
    options: ["Lundi", "Jeudi", "Samedi", "Dimanche"],
    correctIndex: 0,
 
  },
  {
    question: "Quel jour correspond à « martes » ?",
    options: ["Mardi", "Vendredi", "Dimanche", "Lundi"],
    correctIndex: 0,
   
  },
  {
    question: "Que veut dire « miércoles » ?",
    options: ["Mercredi", "Jeudi", "Samedi", "Lundi"],
    correctIndex: 0,
  
  },
  {
    question: "Comment traduit-on « jueves » en français ?",
    options: ["Jeudi", "Vendredi", "Mardi", "Dimanche"],
    correctIndex: 0,
  
  },
  {
    question: "Quel est le sens de « viernes » ?",
    options: ["Vendredi", "Samedi", "Lundi", "Mercredi"],
    correctIndex: 0,
   
  },
  {
    question: "À quel jour correspond « sábado » ?",
    options: ["Samedi", "Dimanche", "Vendredi", "Lundi"],
    correctIndex: 0,
    
  },
  {
    question: "Que signifie « domingo » ?",
    options: ["Dimanche", "Samedi", "Mardi", "Mercredi"],
    correctIndex: 0,

  },
  {
    question: "Quel est le premier jour de la semaine ",
    options: ["Lundi", "Dimanche", "Samedi", "Vendredi"],
    correctIndex: 0,
 
  },
  {
    question: "Quel jour vient après « miércoles » ?",
    options: ["Jueves", "Martes", "Viernes", "Domingo"],
    correctIndex: 0,
   
  },
  {
    question: "Quel jour précède « domingo » ?",
    options: ["Sábado", "Viernes", "Lunes", "Martes"],
    correctIndex: 0,
    
  },
];

const videoUrl = "https://youtu.be/C4fREj60Crk"; // chanson éducative

const LessonDebutant2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [current]);

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-xl w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Vous avez répondu correctement à{" "}
            <span className="text-green-600">{score}</span> sur{" "}
            <span className="text-purple-700">{questions.length}</span> questions.
          </p>

          <div className="my-10">
            <h3 className="text-xl font-bold mb-4 text-purple-800">
              🎶 Écoutez cette chanson éducative 🎶
            </h3>
            <ReactPlayer url={videoUrl} controls width="100%" />
          </div>

          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setShowResult(false);
              setAnswered(false);
              setIsCorrectAnswer(false);
            }}
            className="mt-6 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full shadow-lg font-bold text-xl"
          >
            Recommencer
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
          Leçon Débutant 2 - Quiz à Choix Multiple
        </h1>

        {/* Barre de progression */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-2xl mb-4 text-center text-gray-900 font-semibold">
          {questions[current].question}
        </p>

     

        <div className="grid gap-5">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={answered}
              className={`py-4 rounded-xl text-xl font-semibold shadow-md transition duration-300 ${
                answered
                  ? idx === questions[current].correctIndex
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-purple-700 text-white hover:bg-purple-800 active:scale-95"
              } focus:outline-none focus:ring-4 focus:ring-purple-400`}
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
            {isCorrectAnswer ? "Bonne réponse! 🎉" : "Mauvaise réponse, réessayez."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default LessonDebutant2;
