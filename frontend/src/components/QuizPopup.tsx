import React from "react";

interface QuizPopupProps {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  index: number;
  onAnswer: (isCorrect: boolean, index: number) => void;
}

const QuizPopup: React.FC<QuizPopupProps> = ({ question, index, onAnswer }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
        <ul className="space-y-2">
          {question.options.map((option, i) => (
            <li key={i}>
              <button
                onClick={() => onAnswer(option === question.correctAnswer, index)}
                className="w-full py-2 px-4 border rounded hover:bg-gray-100 transition"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizPopup;
