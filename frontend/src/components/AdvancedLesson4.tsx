import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What does 'To curtail liberties' mean?",
    options: ["Restreindre les libertés", "Promouvoir la liberté", "Accroître l’autonomie", "Ignorer les lois"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Whistleblower' into French:",
    options: ["Lanceur d’alerte", "Témoin", "Complice", "Orateur"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To tamper with data' in French?",
    options: ["Falsifier des données", "Partager des données", "Supprimer les informations", "Sécuriser les données"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Allegation' into French:",
    options: ["Allégation", "Allocation", "Aggravation", "Altération"],
    correctIndex: 0,
  },
  {
    question: "What does 'To infringe on rights' mean?",
    options: ["Porter atteinte aux droits", "Appliquer des droits", "Créer des lois", "Assurer la protection"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Ethical dilemma' into French:",
    options: ["Dilemme éthique", "Conflit économique", "Opposition politique", "Problème pratique"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To leak confidential information' in French?",
    options: ["Divulguer des informations confidentielles", "Analyser des données", "Stocker les fichiers", "Éviter les fuites"],
    correctIndex: 0,
  },
  {
    question: "What does 'Data breach' mean?",
    options: ["Violation de données", "Fuite de talents", "Erreur de calcul", "Piraterie maritime"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Cybersecurity threats' into French:",
    options: ["Menaces en cybersécurité", "Armes biologiques", "Panne de réseau", "Stratégies numériques"],
    correctIndex: 0,
  },
  {
    question: "What is the French for 'To safeguard privacy'?",
    options: ["Protéger la vie privée", "Éviter la surveillance", "Gérer les réseaux", "Publier des données"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'A biased opinion' in French?",
    options: ["Une opinion biaisée", "Un avis neutre", "Un jugement équilibré", "Une remarque logique"],
    correctIndex: 0,
  },
  {
    question: "What does 'Freedom of speech' mean?",
    options: ["Liberté d'expression", "Obligation de silence", "Liberté d’action", "Contrôle de la presse"],
    correctIndex: 0,
  },
  {
    question: "Translate 'Government surveillance' into French:",
    options: ["Surveillance gouvernementale", "Sécurité locale", "Politique extérieure", "Justice administrative"],
    correctIndex: 0,
  },
  {
    question: "What does 'To incite violence' mean?",
    options: ["Inciter à la violence", "Éviter le conflit", "Maintenir la paix", "Organiser un débat"],
    correctIndex: 0,
  },
  {
    question: "How do you say 'To raise awareness' in French?",
    options: ["Sensibiliser", "Mobiliser", "Désinformer", "Oublier"],
    correctIndex: 0,
  },
];

const AdvancedLesson4: React.FC = () => {
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
            onClick={() => navigate("/advanced-lesson5")}
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
          Leçon Avancée 4 : QCM
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

export default AdvancedLesson4;
