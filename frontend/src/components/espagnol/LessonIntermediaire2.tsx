import React, { useState } from "react";

const questions = [
  {
    question: "Comment dit-on 'J'ai mangé' en espagnol ?",
    options: ["He comido", "Como", "Comía", "Comí"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'Tu parlais' ?",
    options: ["Hablaste", "Hablabas", "Has hablado", "Hablando"],
    correctIndex: 1,
  },
  {
    question: "Comment dire 'Nous sommes allés' ?",
    options: ["Fuimos", "Vamos", "Íbamos", "Hemos ido"],
    correctIndex: 0,
  },
  {
    question: "Quelle est la forme correcte du passé composé pour 'elle a lu' ?",
    options: ["Ha leído", "Leyó", "Leía", "Ha leer"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'Vous écriviez' ?",
    options: ["Escribieron", "Escribías", "Escribíais", "Han escrito"],
    correctIndex: 2,
  },
  {
    question: "Comment dit-on 'Ils ont vu' ?",
    options: ["Vieron", "Han visto", "Veían", "Ven"],
    correctIndex: 1,
  },
  {
    question: "Traduction de 'Je faisais' en espagnol ?",
    options: ["Hacía", "Hice", "Hecho", "Haciendo"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'Nous buvions' ?",
    options: ["Bebimos", "Bebíamos", "Bebemos", "Hemos bebido"],
    correctIndex: 1,
  },
  {
    question: "Forme correcte pour 'tu as dormi' ?",
    options: ["Has dormido", "Dormiste", "Dormías", "Dormido"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Elle allait' ?",
    options: ["Iba", "Fue", "Ha ido", "Va"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'J’ai pris' ?",
    options: ["He tomado", "Tomé", "Tomaba", "Tomando"],
    correctIndex: 0,
  },
  {
    question: "Comment traduire 'Vous avez parlé' ?",
    options: ["Habéis hablado", "Hablasteis", "Hablaban", "Hablan"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Il a couru' ?",
    options: ["Ha corrido", "Corrió", "Corría", "Corre"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Ils vivaient' ?",
    options: ["Vivían", "Vivieron", "Viven", "Han vivido"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'Je chantais' ?",
    options: ["Cantaba", "Canté", "He cantado", "Canto"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Tu riais' ?",
    options: ["Reías", "Reíste", "Te has reído", "Ríes"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Nous avons étudié' ?",
    options: ["Hemos estudiado", "Estudiábamos", "Estudiamos", "Estudiando"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'Il parlait souvent' ?",
    options: ["Hablaba a menudo", "Ha hablado", "Habla a menudo", "Habló a menudo"],
    correctIndex: 0,
  },
  {
    question: "Traduction de 'Vous lisiez un livre' ?",
    options: ["Leíais un libro", "Leísteis un libro", "Habéis leído un libro", "Lees un libro"],
    correctIndex: 0,
  },
  {
    question: "Comment dire 'Ils ont travaillé' ?",
    options: ["Han trabajado", "Trabajaban", "Trabajaron", "Trabajan"],
    correctIndex: 0,
  },
];

const LessonIntermediaire2: React.FC = () => {
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

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-200 p-8">
        <div className="bg-white bg-opacity-90 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
            🏆 Résultat 🏆
          </h2>
          <p className="text-3xl text-gray-800 font-semibold">
            Tu as obtenu{" "}
            <span className="text-green-600">{score}</span> sur{" "}
            <span className="text-purple-700">{questions.length}</span>.
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
        </div>
      </div>
    );
  }

  const progressPercent = (current / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 p-6 font-sans">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 ring-1 ring-purple-400 animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-700 drop-shadow-md">
          Leçon Intermédiaire 2 - Temps passés (Espagnol)
        </h1>

        {/* Barre de progression */}
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
              className={`
                py-4 rounded-xl text-xl font-semibold shadow-md transition 
                duration-300
                ${
                  answered
                    ? idx === questions[current].correctIndex
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
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

        <p className="mt-10 text-center text-purple-700 font-semibold text-lg tracking-wide">
          Question {current + 1} sur {questions.length}
        </p>
      </div>
    </div>
  );
};

export default LessonIntermediaire2;
