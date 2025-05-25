import React, { useState } from "react";

const BeginnerLesson7: React.FC = () => {
  const questions = [
    { question: "How do you say 'Une chemise' in English?", options: ["A shirt", "A shoe", "A hat", "A jacket"], correctIndex: 0 },
    { question: "What is the English word for 'Un pantalon'?", options: ["Pants", "Shirt", "Gloves", "Scarf"], correctIndex: 0 },
    { question: "Translate 'Une robe' into English:", options: ["A dress", "A coat", "A skirt", "A sweater"], correctIndex: 0 },
    { question: "How do you say 'Des chaussures' in English?", options: ["Shoes", "Hats", "Socks", "Glasses"], correctIndex: 0 },
    { question: "What is the English for 'Un chapeau'?", options: ["A hat", "A shirt", "A jacket", "A belt"], correctIndex: 0 },
    { question: "Translate 'Un manteau' into English:", options: ["A coat", "A shirt", "A dress", "Pants"], correctIndex: 0 },
    { question: "How do you say 'Des gants' in English?", options: ["Gloves", "Socks", "Shoes", "Hats"], correctIndex: 0 },
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
    <div className="min-h-screen p-6 bg-purple-50 text-purple-900 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Leçon 7 :  les vêtements</h2>
        {!showResult ? (
          <>
            <p className="mb-6 text-lg font-semibold">{questions[current].question}</p>
            <div className="flex flex-col gap-4">
              {questions[current].options.map((opt, i) => {
                const isCorrect = i === questions[current].correctIndex;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                    className={`px-5 py-3 rounded-lg text-white font-semibold transition 
                      ${
                        answered
                          ? isCorrect
                            ? "bg-green-500 shadow-lg"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-purple-600 hover:bg-purple-700"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && correctAnswerChosen && (
              <p className="mt-6 text-center text-green-600 font-bold text-2xl animate-bounce">Bravo ! 🎉</p>
            )}
            <p className="mt-8 text-center text-purple-700 font-medium">
              Question {current + 1} sur {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Résultat</h3>
            <p className="text-lg">
              Vous avez obtenu <span className="font-bold text-green-600">{score}</span> sur {questions.length}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeginnerLesson7;
