import React, { useState } from "react";

const FrancaisLessonDebutant2: React.FC = () => {
  const questions = [
    {
      audio: "/audio/lundi.mp3",
      question: "أي يوم من الأسبوع يقابل 'الاثنين'؟",
      options: ["Lundi", "Mardi", "Mercredi", "Jeudi"],
      correctIndex: 0,
    },
    {
      audio: "/audio/mardi.mp3",
      question: "أي يوم من الأسبوع يقابل 'الثلاثاء'؟",
      options: ["Vendredi", "Samedi", "Mardi", "Dimanche"],
      correctIndex: 2,
    },
    {
      audio: "/audio/mercredi.mp3",
      question: "أي يوم من الأسبوع يقابل 'الأربعاء'؟",
      options: ["Jeudi", "Mercredi", "Lundi", "Samedi"],
      correctIndex: 1,
    },
    {
      audio: "/audio/jeudi.mp3",
      question: "أي يوم من الأسبوع يقابل 'الخميس'؟",
      options: ["Dimanche", "Jeudi", "Vendredi", "Mardi"],
      correctIndex: 1,
    },
    {
      audio: "/audio/vendredi.mp3",
      question: "أي يوم من الأسبوع يقابل 'الجمعة'؟",
      options: ["Vendredi", "Mercredi", "Lundi", "Jeudi"],
      correctIndex: 0,
    },
    {
      audio: "/audio/samedi.mp3",
      question: "أي يوم من الأسبوع يقابل 'السبت'؟",
      options: ["Samedi", "Dimanche", "Mardi", "Vendredi"],
      correctIndex: 0,
    },
    {
      audio: "/audio/dimanche.mp3",
      question: "أي يوم من الأسبوع يقابل 'الأحد'؟",
      options: ["Mercredi", "Dimanche", "Jeudi", "Lundi"],
      correctIndex: 1,
    },
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 النتيجة 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            لقد أجبت بشكل صحيح على{" "}
            <span className="text-green-600">{score}</span> من أصل{" "}
            <span className="text-purple-700">{questions.length}</span> أسئلة.
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          درس الفرنسية للمبتدئين 2 - أيام الأسبوع
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <audio
          src={questions[current].audio}
          controls
          autoPlay
          className="w-full mb-6 rounded-lg shadow-md"
        />

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
            {isCorrectAnswer ? "إجابة صحيحة! 🎉" : "إجابة خاطئة، حاول مرة أخرى."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          السؤال {current + 1} من {questions.length}
        </p>
      </div>
    </div>
  );
};

export default FrancaisLessonDebutant2;
