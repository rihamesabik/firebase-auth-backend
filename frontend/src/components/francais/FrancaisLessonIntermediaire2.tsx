import React, { useState } from "react";

const questions = [
  {
    question: "ما هو الجمع الصحيح لكلمة 'cheval'؟",
    options: ["chevals", "chevaux", "chevels", "chevalles"],
    correctIndex: 1,
  },
  {
    question: "اختر الجملة التي تحتوي على فعل في الزمن الماضي المركب (passé composé)؟",
    options: [
      "Je mange une pomme",
      "Je vais manger une pomme",
      "J’ai mangé une pomme",
      "Je mangerai une pomme",
    ],
    correctIndex: 2,
  },
  {
    question: "ما هو معنى كلمة 'parce que'؟",
    options: ["ولكن", "لأن", "ثم", "إلا"],
    correctIndex: 1,
  },
  {
    question: "اختر الجملة الصحيحة لغويًا:",
    options: [
      "Elle est allé au marché",
      "Elle est allée au marché",
      "Elle est allés au marché",
      "Elle est aller au marché",
    ],
    correctIndex: 1,
  },
  {
    question: "ما هو ضد كلمة 'toujours'؟",
    options: ["jamais", "souvent", "quelquefois", "bientôt"],
    correctIndex: 0,
  },
  {
    question: "ما نوع الكلمة 'rapidement'؟",
    options: ["اسم", "صفة", "فعل", "حال (adverbe)"],
    correctIndex: 3,
  },
  {
    question: "اختر العبارة الصحيحة:",
    options: [
      "Nous sommes content",
      "Nous est contents",
      "Nous sommes contents",
      "Nous sont contents",
    ],
    correctIndex: 2,
  },
];

const FrancaisLessonIntermediaire2: React.FC = () => {
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-8" dir="rtl">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 النتيجة 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            أجبت بشكل صحيح على{" "}
            <span className="text-green-600">{score}</span> من{" "}
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans" dir="rtl">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          الدرس 2 : قواعد ومفردات
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

export default FrancaisLessonIntermediaire2;
