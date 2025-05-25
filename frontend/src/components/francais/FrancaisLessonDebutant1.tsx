import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "كيف تقول 'مرحبا' بالفرنسية؟",
    options: ["Bonjour", "Bonsoir", "Salut", "Merci"],
    correctIndex: 0,
  },
  {
    question: "ما هو معنى كلمة 'شكراً' بالفرنسية؟",
    options: ["Merci", "Pardon", "S’il vous plaît", "De rien"],
    correctIndex: 0,
  },
  {
    question: "كيف تقول 'وداعاً' بالفرنسية؟",
    options: ["Au revoir", "Bonjour", "Salut", "Bonsoir"],
    correctIndex: 0,
  },
  {
    question: "ما هو معنى 'من فضلك' بالفرنسية؟",
    options: ["S’il vous plaît", "Merci", "Pardon", "Excusez-moi"],
    correctIndex: 0,
  },
  {
    question: "كيف تقول 'آسف' بالفرنسية؟",
    options: ["Désolé", "Merci", "Salut", "Pardon"],
    correctIndex: 0,
  },
  {
    question: "ما هو معنى 'نعم' بالفرنسية؟",
    options: ["Oui", "Non", "Peut-être", "Jamais"],
    correctIndex: 0,
  },
  {
    question: "كيف تقول 'لا' بالفرنسية؟",
    options: ["Non", "Oui", "Peut-être", "Jamais"],
    correctIndex: 0,
  },
];

const FrancaisLessonDebutant1: React.FC = () => {
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
              setShowResult(false);
              setAnswered(false);
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

  const progressPercent = ((current) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          درس الفرنسية للمبتدئين 1 - اختبار متعدد الخيارات
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

export default FrancaisLessonDebutant1;
