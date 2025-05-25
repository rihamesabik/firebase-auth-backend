import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "How do you say 'Cuisine' in English?",
    options: ["Kitchen", "Bedroom", "Living room", "Bathroom"],
    correctIndex: 0,
  },
  {
    question: "What is the English word for 'Salon'?",
    options: ["Living room", "Garage", "Hallway", "Garden"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Chambre' into English:",
    options: ["Bedroom", "Kitchen", "Bathroom", "Balcony"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Salle de bain' in English?",
    options: ["Bathroom", "Dining room", "Toilet", "Closet"],
    correctIndex: 0,
  },
  {
    question: "What is the English for 'Jardin'?",
    options: ["Garden", "Garage", "Kitchen", "Terrace"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Toilettes' into English:",
    options: ["Toilet", "Hall", "Bedroom", "Sink"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Balcon' in English?",
    options: ["Balcony", "Bathroom", "Stairs", "Living room"],
    correctIndex: 0,
  },
];

const IntermediateLesson6: React.FC = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    if (answered) return; // ignore clicks après réponse

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
    }, 1500); // délai avant question suivante ou résultat
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
          Leçon Intermédiaire 6 : QCM
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

export default IntermediateLesson6;
