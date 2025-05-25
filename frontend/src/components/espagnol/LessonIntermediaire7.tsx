import React, { useState } from "react";

const LessonIntermediaire7: React.FC = () => {
  const questions = [
    {
      question: "Que signifie l'expression espagnole : « Estar en las nubes » ?",
      options: [
        "Être distrait",
        "Être en colère",
        "Être malade",
        "Être motivé",
      ],
      correctIndex: 0,
    },
    {
      question: "« Tirar la toalla » veut dire :",
      options: ["Abandonner", "Se battre", "Se reposer", "Mentir"],
      correctIndex: 0,
    },
    {
      question: "Quelle est la signification de « Costar un ojo de la cara » ?",
      options: [
        "Coûter très cher",
        "Être gratuit",
        "Être inutile",
        "Être ancien",
      ],
      correctIndex: 0,
    },
    {
      question: "« No tener pelos en la lengua » signifie :",
      options: [
        "Parler franchement",
        "Être timide",
        "Parler doucement",
        "Bégayer",
      ],
      correctIndex: 0,
    },
    {
      question: "Que veut dire « Ser pan comido » ?",
      options: [
        "Être très facile",
        "Être délicieux",
        "Être inutile",
        "Être oublié",
      ],
      correctIndex: 0,
    },
    {
      question: "« Estar como una cabra » signifie :",
      options: ["Être fou", "Être intelligent", "Être nerveux", "Être fatigué"],
      correctIndex: 0,
    },
    {
      question: "Que signifie « Dormir como un tronco » ?",
      options: [
        "Dormir profondément",
        "Être insomniaque",
        "Dormir peu",
        "Faire un cauchemar",
      ],
      correctIndex: 0,
    },
    {
      question: "« Dar en el clavo » veut dire :",
      options: ["Mettre dans le mille", "Faire une erreur", "Être indécis", "Réfléchir"],
      correctIndex: 0,
    },
    {
      question: "Que veut dire « Andarse por las ramas » ?",
      options: ["Éviter le sujet", "Être rapide", "Être direct", "S'énerver"],
      correctIndex: 0,
    },
    {
      question: "L'expression « Estar entre la espada y la pared » signifie :",
      options: [
        "Être dans une situation difficile",
        "Être en retard",
        "Être heureux",
        "Être perdu",
      ],
      correctIndex: 0,
    },
    {
      question: "Que signifie « Ser uña y carne » ?",
      options: [
        "Être inséparables",
        "Être ennemis",
        "Être jaloux",
        "Être lointains",
      ],
      correctIndex: 0,
    },
    {
      question: "« Tener la sartén por el mango » signifie :",
      options: [
        "Avoir le contrôle",
        "Faire à manger",
        "Être désorganisé",
        "Avoir peur",
      ],
      correctIndex: 0,
    },
    {
      question: "Que veut dire « No dar pie con bola » ?",
      options: ["Tout rater", "Réussir facilement", "Danser mal", "Avoir de la chance"],
      correctIndex: 0,
    },
    {
      question: "« Estar en la luna » signifie :",
      options: ["Être distrait", "Être amoureux", "Être intelligent", "Être content"],
      correctIndex: 0,
    },
    {
      question: "Que signifie « A otro perro con ese hueso » ?",
      options: [
        "Ne me raconte pas d'histoires",
        "Donne-moi une seconde chance",
        "Partage avec les autres",
        "Va voir ailleurs",
      ],
      correctIndex: 0,
    },
    {
      question: "« Estar como pez en el agua » veut dire :",
      options: ["Être très à l’aise", "Être stressé", "Être surpris", "Être inconfortable"],
      correctIndex: 0,
    },
    {
      question: "Que veut dire « Hacerse la vista gorda » ?",
      options: [
        "Fermer les yeux sur quelque chose",
        "Avoir une mauvaise vue",
        "Regarder fixement",
        "Oublier quelque chose",
      ],
      correctIndex: 0,
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Tu as répondu correctement à{" "}
            <span className="text-green-600">{score}</span> question
            {score > 1 ? "s" : ""} sur{" "}
            <span className="text-purple-700">{questions.length}</span>.
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
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-400 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 drop-shadow-md">
          Leçon Intermédiaire 7 : Expresiones idiomáticas
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-purple-300 rounded-full overflow-hidden mb-8 shadow-inner">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-2xl mb-8 text-center text-gray-900 font-semibold leading-relaxed">
          {current + 1}. {questions[current].question}
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
            {isCorrectAnswer ? "Bonne réponse ! 🎉" : "Mauvaise réponse, essaie encore."}
          </p>
        )}

        <p className="mt-10 text-center text-purple-800 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default LessonIntermediaire7;
