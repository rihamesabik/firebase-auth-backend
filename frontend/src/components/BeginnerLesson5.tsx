import React, { useState } from "react";

const BeginnerLesson5: React.FC = () => {
  const questions = [

    {
      question: "How do you say 'Voiture' in English?",
      options: ["Car", "Boat", "Plane", "Bike"],
      correctIndex: 0,
    },
    {
      question: "What is the English word for 'Bateau'?",
      options: ["Bus", "Boat", "Train", "Truck"],
      correctIndex: 1,
    },
    {
      question: "Translate 'Avion' into English:",
      options: ["Airplane", "Helicopter", "Car", "Subway"],
      correctIndex: 0,
    },
    {
      question: "How do you say 'Vélo' in English?",
      options: ["Bike", "Car", "Bus", "Motorcycle"],
      correctIndex: 0,
    },
    {
      question: "What is the English for 'Train'?",
      options: ["Boat", "Train", "Truck", "Plane"],
      correctIndex: 1,
    },
    {
      question: "Translate 'Camion' into English:",
      options: ["Truck", "Car", "Bus", "Motorcycle"],
      correctIndex: 0,
    },
    {
      question: "How do you say 'Bus' in English?",
      options: ["Boat", "Bike", "Bus", "Car"],
      correctIndex: 2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correctAnswerChosen, setCorrectAnswerChosen] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setAnswered(true);

    const isCorrect = index === questions[current].correctIndex;
    if (isCorrect) setScore(score + 1);
    setCorrectAnswerChosen(isCorrect);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setAnswered(false);
        setCorrectAnswerChosen(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-purple-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-10 flex flex-col">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-8 text-center">
          Leçon 5 : les moyens de transport
        </h2>

        {!showResult ? (
          <>
            <p className="text-xl font-semibold mb-6 text-center text-gray-800">
              {questions[current].question}
            </p>
            <div className="flex flex-col gap-4">
              {questions[current].options.map((opt, i) => {
                const isCorrect = i === questions[current].correctIndex;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                    className={`px-6 py-3 rounded-xl text-lg font-semibold transition
                      ${
                        answered
                          ? isCorrect
                            ? "bg-green-500 text-white shadow-lg"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && correctAnswerChosen && (
              <p className="mt-8 text-center text-green-600 font-extrabold text-3xl animate-bounce drop-shadow-lg">
                Bravo ! 🎉
              </p>
            )}

            <p className="mt-10 text-center text-purple-700 font-medium tracking-wide select-none">
              Question {current + 1} sur {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-purple-700 mb-6">
              Résultat
            </h3>
            <p className="text-xl text-gray-800">
              Vous avez obtenu{" "}
              <span className="font-extrabold text-green-600">{score}</span> sur{" "}
              {questions.length}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeginnerLesson5;
