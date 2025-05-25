import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Translate 'To advocate for' into French:",
    options: ["Plaider en faveur de", "Contester", "Ignorer", "Interdire"],
    correctIndex: 0,
  },
  {
    question: "What does 'Compelling' mean in French?",
    options: ["Convaincant", "Complice", "Complexe", "Comique"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To undermine' in French?",
    options: ["Saper", "Renforcer", "Soutenir", "Élever"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Accountability' into French:",
    options: ["Responsabilité", "Possibilité", "Rentabilité", "Complicité"],
    correctIndex: 0,
  },
  {
    question: "What is the French translation of 'To comply with'?",
    options: ["Se conformer à", "Comparer avec", "Compléter", "Consolider"],
    correctIndex: 0,
  },
  {
    question: "What does 'Widespread criticism' mean?",
    options: ["Critique généralisée", "Louange universelle", "Folie répandue", "Intérêt partagé"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To foster innovation' in French?",
    options: ["Favoriser l'innovation", "Gâcher l’innovation", "Forcer le progrès", "Combattre le changement"],
    correctIndex: 0,
  },
  {
    question: "Translate 'To enforce a law' into French:",
    options: ["Faire appliquer une loi", "Éviter une loi", "Créer une loi", "Annuler une loi"],
    correctIndex: 0,
  },
  {
    question: "What does 'To cope with difficulties' mean?",
    options: ["Faire face aux difficultés", "Créer des obstacles", "Ignorer les problèmes", "Réussir sans effort"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Scarcity' into French:",
    options: ["Rareté", "Abondance", "Sécurité", "Fidélité"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Trade-off' in French?",
    options: ["Compromis", "Échange", "Rejet", "Triche"],
    correctIndex: 0,
  },
  {
    question: "What does 'To trigger a reaction' mean?",
    options: ["Déclencher une réaction", "Retenir une réponse", "Ignorer une opinion", "Prévoir un comportement"],
    correctIndex: 0,
  },
  {
    question: "Translate 'A thorough analysis' into French:",
    options: ["Une analyse approfondie", "Un résumé rapide", "Un projet simple", "Une question posée"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'Sustainable development' in French?",
    options: ["Développement durable", "Croissance rapide", "Planification massive", "Environnement défavorable"],
    correctIndex: 0,
  },
  {
    question: "Translate 'In the long run' into French:",
    options: ["À long terme", "À vue d’œil", "À court terme", "À l’improviste"],
    correctIndex: 0,
  },
];

const AdvancedLesson3: React.FC = () => {
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-100 to-indigo-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-indigo-700 drop-shadow-md">
            🎉 Résultat 🎉
          </h2>
          <p className="text-3xl font-semibold text-gray-800 mb-6">
            Vous avez obtenu <span className="text-purple-600">{score}</span> sur{" "}
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
            onClick={() => navigate("/advanced-lessons")}
            className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Retour aux leçons avancées
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-purple-700 tracking-tight drop-shadow-sm">
          Leçon Avancée 3 : QCM
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
            Bien joué ! 🎯
          </div>
        )}

        <p className="mt-12 text-center text-purple-700 font-semibold tracking-wide select-none">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default AdvancedLesson3;
