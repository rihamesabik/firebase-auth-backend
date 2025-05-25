import React, { useState, useRef, useEffect } from "react";

const questions = [
  {
    question: "Comment dit-on 'Bonjour' en anglais ?",
    options: ["Hello", "Goodbye", "Please", "Thanks"],
    correctIndex: 0,
  },
  {
    audio: "/audio/ttsMP3.com_VoiceText_2025-5-16_21-0-12.mp3",
    question: "Que veut dire 'Thank you' ?",
    options: ["Pardon", "Merci", "Non", "Oui"],
    correctIndex: 1,
  },
  {
    audio: "/audio/ttsMP3.com_VoiceText_2025-5-16_20-53-46.mp3",
    question: "Quel est l'opposé de 'Yes' ?",
    options: ["Of course", "No", "Maybe", "Always"],
    correctIndex: 1,
  },
  {
    question: "Comment dit-on 'S'il vous plaît' ?",
    options: ["Hello", "Goodbye", "Please", "Sorry"],
    correctIndex: 2,
  },
  {
    audio: "/audio/ttsMP3.com_VoiceText_2025-5-16_20-53-31.mp3",
    question: "Que veut dire 'Sorry' ?",
    options: ["Merci", "Pardon", "Bonjour", "Au revoir"],
    correctIndex: 1,
  },
  {
    question: "Comment dit-on 'Merci beaucoup' ?",
    options: ["Thanks a lot", "No problem", "See you", "Yes please"],
    correctIndex: 0,
  },
  {
    audio: "/audio/ttsMP3.com_VoiceText_2025-5-16_20-53-15.mp3",
    question: "Que veut dire 'See you later' ?",
    options: ["À bientôt", "Bonjour", "Merci", "Excusez-moi"],
    correctIndex: 0,
  },
];

const BeginnerLessonWithAudio: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setAnswered(false);
    setIsCorrectAnswer(false);
    if (audioRef.current && questions[current].audio) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [current]);

  const handleAnswer = (index: number) => {
    if (answered) return; // bloque les réponses multiples
    setAnswered(true);

    const correct = index === questions[current].correctIndex;
    setIsCorrectAnswer(correct);

    if (correct) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-100 to-pink-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-indigo-700 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl font-semibold text-gray-800">
            Vous avez obtenu{" "}
            <span className="text-purple-600">{score}</span> sur{" "}
            <span className="text-purple-600">{questions.length}</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-purple-700 tracking-tight drop-shadow-sm">
          Leçon 1 : Audio + QCM
        </h2>

        {questions[current].audio && (
          <audio
            controls
            ref={audioRef}
            className="w-full mb-8 rounded-lg border border-purple-300 shadow-inner"
          >
            <source src={questions[current].audio} type="audio/mp3" />
            Votre navigateur ne supporte pas l'audio.
          </audio>
        )}

        <p className="mb-8 text-2xl font-semibold text-center text-gray-800 px-6">
          {questions[current].question}
        </p>

        <div className="grid grid-cols-1 gap-5 px-6">
          {questions[current].options.map((opt, i) => {
            const correctIndex = questions[current].correctIndex;
            const isCorrect = i === correctIndex;
            const isSelectedCorrect = answered && isCorrect;
            const isSelectedWrong = answered && i !== correctIndex && i === questions[current].options.findIndex((_, idx) => idx === i);

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                className={`
                  px-6 py-4 rounded-2xl text-lg font-semibold
                  transition-shadow duration-300
                  ${
                    answered
                      ? isCorrect
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
                  }
                  focus:outline-none focus:ring-4 focus:ring-purple-300
                `}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {answered && isCorrectAnswer && (
          <div className="mt-8 text-center text-green-600 font-extrabold text-3xl animate-bounce drop-shadow-lg">
            Bravo ! 🎉
          </div>
        )}

        <p className="mt-12 text-center text-purple-700 font-semibold tracking-wide select-none">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default BeginnerLessonWithAudio;
