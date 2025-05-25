import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "How do you say 'Je me lève à 7h' in English?",
    options: ["I get up at 7", "I stand up at 7", "I wake at 7", "I go up at 7"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Il prend son petit déjeuner' into English:",
    options: ["He eats breakfast", "He eats lunch", "He drinks coffee", "He wakes up"],
    correctIndex: 0,
  },
  {
    question: "What is the English for 'Nous allons à l'école'?",
    options: ["We go to school", "We are in school", "We have school", "We study school"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Elle se brosse les dents' in English?",
    options: ["She brushes her teeth", "She washes her teeth", "She cleans her mouth", "She fixes her teeth"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Je fais mes devoirs après l’école' into English:",
    options: ["I do my homework after school", "I study after class", "I finish school", "I read my books"],
    correctIndex: 0,
  },
  {
    question: "What is the English for 'Ils dînent à 20h'?",
    options: ["They have dinner at 8 PM", "They take dinner at 8", "They eat lunch at 8", "They go to bed at 8"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Je me couche à 22h' in English?",
    options: ["I go to bed at 10 PM", "I sleep at 10", "I lie down at 10 PM", "I rest at 10"],
    correctIndex: 0,
  },
];

const IntermediateLesson2: React.FC = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    if (answered) return;

    setAnswered(true);
    setSelectedIndex(index);

    const correct = index === questions[current].correctIndex;
    setIsCorrectAnswer(correct);

    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setAnswered(false);
        setSelectedIndex(null);
        setIsCorrectAnswer(false);
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
          <p className="text-3xl font-semibold text-gray-800 mb-6">
            Vous avez obtenu{" "}
            <span className="text-purple-600">{score}</span> sur{" "}
            <span className="text-purple-600">{questions.length}</span>.
          </p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setShowResult(false);
              setAnswered(false);
              setSelectedIndex(null);
              setIsCorrectAnswer(false);
            }}
            className="mr-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Recommencer le quiz
          </button>
          <button
            onClick={() => navigate("/intermediate-lessons")}
            className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Retour aux leçons intermédiaires
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-purple-700 tracking-tight drop-shadow-sm">
          Leçon Intermédiaire 2 : QCM
        </h2>

        <p className="mb-8 text-2xl font-semibold text-center text-gray-800 px-6">
          {questions[current].question}
        </p>

        <div className="grid grid-cols-1 gap-5 px-6">
          {questions[current].options.map((opt, i) => {
            const correctIndex = questions[current].correctIndex;
            const isCorrect = i === correctIndex;
            const isSelectedCorrect = answered && isCorrect;
            const isSelectedWrong = answered && i === selectedIndex && !isCorrect;

            let btnClass = `
              px-6 py-4 rounded-2xl text-lg font-semibold
              transition-shadow duration-300
              focus:outline-none focus:ring-4 focus:ring-purple-300
            `;

            if (answered) {
              if (isSelectedCorrect) btnClass += " bg-green-500 text-white shadow-lg";
              else if (isSelectedWrong) btnClass += " bg-red-500 text-white";
              else btnClass += " bg-gray-200 text-gray-400 cursor-not-allowed";
            } else {
              btnClass += " bg-purple-600 text-white hover:bg-purple-700 shadow-md";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                className={btnClass}
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

export default IntermediateLesson2;
