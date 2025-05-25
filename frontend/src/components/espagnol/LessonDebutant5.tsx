import React, { useState } from "react";

const questions = [
  { question: "Comment dit-on 'un' en espagnol ?", options: ["Uno", "Dos", "Tres", "Cuatro"], correctIndex: 0 },
  { question: "Que signifie 'dos' en français ?", options: ["Deux", "Trois", "Quatre", "Un"], correctIndex: 0 },
  { question: "Comment dit-on 'trois' en espagnol ?", options: ["Tres", "Cinco", "Cuatro", "Dos"], correctIndex: 0 },
  { question: "Que signifie 'cuatro' en français ?", options: ["Quatre", "Cinq", "Trois", "Six"], correctIndex: 0 },
  { question: "Comment dit-on 'cinq' en espagnol ?", options: ["Seis", "Cinco", "Siete", "Ocho"], correctIndex: 1 },
  { question: "Que signifie 'seis' en français ?", options: ["Six", "Sept", "Cinq", "Huit"], correctIndex: 0 },
  { question: "Comment dit-on 'sept' en espagnol ?", options: ["Siete", "Ocho", "Nueve", "Diez"], correctIndex: 0 },
  { question: "Que signifie 'ocho' en français ?", options: ["Huit", "Neuf", "Dix", "Sept"], correctIndex: 0 },
  { question: "Comment dit-on 'neuf' en espagnol ?", options: ["Nueve", "Diez", "Ocho", "Once"], correctIndex: 0 },
  { question: "Que signifie 'diez' en français ?", options: ["Dix", "Onze", "Neuf", "Huit"], correctIndex: 0 },
  { question: "Comment dit-on 'onze' en espagnol ?", options: ["Doce", "Trece", "Once", "Catorce"], correctIndex: 2 },
  { question: "Que signifie 'doce' en français ?", options: ["Douze", "Onze", "Treize", "Dix"], correctIndex: 0 },
  { question: "Comment dit-on 'treize' en espagnol ?", options: ["Catorce", "Quince", "Trece", "Dieciséis"], correctIndex: 2 },
  { question: "Que signifie 'catorce' en français ?", options: ["Quatorze", "Treize", "Douze", "Quinze"], correctIndex: 0 },
  { question: "Comment dit-on 'quinze' en espagnol ?", options: ["Quince", "Trece", "Catorce", "Dieciséis"], correctIndex: 0 },
  { question: "Que signifie 'dieciséis' en français ?", options: ["Seize", "Quinze", "Dix-sept", "Dix-huit"], correctIndex: 0 },
  { question: "Comment dit-on 'dix-sept' en espagnol ?", options: ["Diecisiete", "Dieciocho", "Diecinueve", "Veinte"], correctIndex: 0 },
  { question: "Que signifie 'dieciocho' en français ?", options: ["Dix-huit", "Dix-sept", "Dix-neuf", "Vingt"], correctIndex: 0 },
  { question: "Comment dit-on 'dix-neuf' en espagnol ?", options: ["Diecisiete", "Diecinueve", "Dieciséis", "Veinte"], correctIndex: 1 },
  { question: "Que signifie 'veinte' en français ?", options: ["Vingt", "Dix-neuf", "Dix-huit", "Trente"], correctIndex: 0 },
];

const LessonDebutant5: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 p-6 font-sans">
      {!showResult ? (
        <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-300 animate-fadeIn">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
            Leçon Débutant 5 - Quiz à choix multiples
          </h1>

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
              {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse, essaie encore."}
            </p>
          )}

          <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
            Question {current + 1} sur {questions.length}
          </p>
        </div>
      ) : (
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Tu as répondu correctement à{" "}
            <span className="text-green-600">{score}</span> sur{" "}
            <span className="text-purple-700">{questions.length}</span> questions.
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
            Recommencer
          </button>

          {/* Vidéo complémentaire affichée après les résultats */}
          <div className="mt-12 w-full">
            <h2 className="text-2xl font-bold text-center text-purple-800 mb-4">
              📺 Vidéo complémentaire : Compter en espagnol
            </h2>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/G27hp1G00wI"
                title="Les chiffres en espagnol (de 1 à 20)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDebutant5;
