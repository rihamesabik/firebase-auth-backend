import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What does 'To override a decision' mean?",
    options: ["Passer outre une décision", "Confirmer une décision", "Attendre une réponse", "Refuser une invitation"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Accountability' into French:",
    options: ["Responsabilité", "Fiabilité", "Accessibilité", "Vérifiabilité"],
    correctIndex: 0,
  },
  {
    question: "What is the French for 'Due process'?",
    options: ["Procédure régulière", "Exécution sommaire", "Traitement en cours", "Appel à témoin"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'A breach of trust' in French?",
    options: ["Une violation de confiance", "Une preuve d’amitié", "Un pacte moral", "Une rupture de contrat"],
    correctIndex: 0,
  },
  {
    question: "What does 'To uphold a principle' mean?",
    options: ["Soutenir un principe", "Remettre en question une valeur", "Ignorer une règle", "Modifier une décision"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Civil liberties' into French:",
    options: ["Libertés civiles", "Droits commerciaux", "Actes administratifs", "Libertés syndicales"],
    correctIndex: 0,
  },
  {
    question: "What is 'A contentious issue' in French?",
    options: ["Une question controversée", "Un thème récurrent", "Un fait divers", "Une affaire classée"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To endorse a view' in French?",
    options: ["Appuyer une opinion", "Critiquer une idée", "Partager un lien", "Réfuter un fait"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Mass surveillance' into French:",
    options: ["Surveillance de masse", "Sécurité collective", "Contrôle militaire", "Observation ponctuelle"],
    correctIndex: 0,
  },
  {
    question: "What does 'To advocate for change' mean?",
    options: ["Militer pour un changement", "Refuser l'évolution", "Défendre le passé", "Rejeter la réforme"],
    correctIndex: 0,
  },
  {
    question: "What is 'A trustworthy source' in French?",
    options: ["Une source fiable", "Un canal risqué", "Un message anonyme", "Une preuve contestée"],
    correctIndex: 0,
  },
  {
    question: "Translate 'To regulate content' into French:",
    options: ["Réglementer le contenu", "Publier des articles", "Censurer le débat", "Partager des données"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To report abuse' in French?",
    options: ["Signaler un abus", "Justifier une erreur", "Encourager la faute", "Diffuser une alerte"],
    correctIndex: 0,
  },
  {
    question: "What is 'An infringement of rights'?",
    options: ["Une atteinte aux droits", "Une mise à jour des lois", "Un appui juridique", "Un progrès légal"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Social backlash' into French:",
    options: ["Contrecoup social", "Tendance populaire", "Progrès sociétal", "Consensus social"],
    correctIndex: 0,
  },
];

const AdvancedLesson5: React.FC = () => {
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-indigo-700 drop-shadow-md">
            🎓 Résultat Final
          </h2>
          <p className="text-3xl font-semibold text-gray-800 mb-6">
            Score : <span className="text-purple-600">{score}</span> /{" "}
            <span className="text-purple-600">{questions.length}</span>
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
            Recommencer
          </button>
          <button
            onClick={() => navigate("/advanced-lesson6")}
            className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Leçon suivante
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-indigo-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow-sm">
          Leçon Avancée 5 : QCM
        </h2>

        <p className="mb-8 text-2xl font-semibold text-center text-gray-800 px-6">
          {questions[current].question}
        </p>

        <div className="grid grid-cols-1 gap-5 px-6">
          {questions[current].options.map((opt, i) => {
            const isCorrect = i === questions[current].correctIndex;
            const isSelectedCorrect = answered && isCorrect;
            const isSelectedWrong = answered && i === selectedIndex && !isCorrect;

            let btnClass = `
              px-6 py-4 rounded-2xl text-lg font-semibold
              transition duration-300
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
            Bien joué ! 🌟
          </div>
        )}

        <p className="mt-12 text-center text-purple-700 font-semibold tracking-wide">
          Question {current + 1} / {questions.length}
        </p>
      </div>
    </div>
  );
};

export default AdvancedLesson5;
