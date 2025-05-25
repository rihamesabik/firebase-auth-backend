import React, { useState, useRef, useEffect } from "react";

const LessonIntermediaire6: React.FC = () => {
  const questions = [
    {
      audio: "/audio/ttsMP3.com_VoiceText_2025-5-22_22-27-18.mp3",
      question: "Que dit la personne à propos de son travail ?",
      options: ["Elle aime son travail", "Elle veut démissionner", "Elle est en vacances", "Elle est en retard"],
      correctIndex: 0,
    },
    {
      audio: "/audio/ttsMP3.com_VoiceText_2025-5-22_22-30-1.mp3",
      question: "Où se passe la scène ?",
      options: ["Dans un supermarché", "Dans un parc", "Dans une école", "Dans un hôpital"],
      correctIndex: 0,
    },
    {
      audio: "/audio/ttsMP3.com_VoiceText_2025-5-22_22-31-17.mp3",
      question: "Quel est le problème évoqué ?",
      options: ["Une panne de voiture", "Un oubli de rendez-vous", "Une dispute familiale", "Un retard de train"],
      correctIndex: 3,
    },
    {
      audio: "/audio/ttsMP3.com_VoiceText_2025-5-22_22-35-24.mp3",
      question: "Pourquoi l’homme est-il stressé ?",
      options: ["Il a un examen", "Il a perdu son téléphone", "Il a un entretien", "Il a faim"],
      correctIndex: 2,
    },
    {
      audio: "/audio/esp5.mp3",
      question: "Quel est le sujet principal ?",
      options: ["Le sport", "L'alimentation", "La politique", "Le temps"],
      correctIndex: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [current]);

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
          Leçon Intermédiaire 6 : Compréhension auditive
        </h1>

        {/* Barre de progression */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <audio ref={audioRef} controls className="mb-6 w-full rounded-lg shadow">
          <source src={questions[current].audio} type="audio/mp3" />
          Ton navigateur ne supporte pas la lecture audio.
        </audio>

        <p className="text-2xl mb-8 text-center text-gray-900 font-semibold leading-relaxed">
          {current + 1}. {questions[current].question}
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

export default LessonIntermediaire6;
