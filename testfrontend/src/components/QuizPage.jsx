// src/components/QuizPage.jsx
import { useEffect, useState } from 'react';
import { getQuizByLecon } from '../api';
import '../styles/QuizPage.css';

export default function QuizPage({ leconId }) {
  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    getQuizByLecon(String(leconId))  // convertit en string si l'API l'exige
      .then((res) => {
        // Assure-toi que res est bien un objet avec .data
        if (res && res.data && res.data.length > 0) {
          setQuiz(res.data[0]);
        }
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du quiz:', error);
      });
  }, [leconId]);

  const checkAnswer = () => {
    if (!quiz) return;
    setResult(selected === quiz.bonneReponse ? '✅ Bonne réponse !' : '❌ Mauvaise réponse');
  };

  if (!quiz) return <p>Chargement...</p>;

  return (
    <div className="quiz-container">
      <h2>{quiz.question}</h2>
      <div className="options">
        {quiz.propositions.map((prop) => (
          <button
            key={prop}
            className={`option-btn ${selected === prop ? 'selected' : ''}`}
            onClick={() => setSelected(prop)}
          >
            {prop}
          </button>
        ))}
      </div>
      <button className="validate-btn" onClick={checkAnswer}>Valider</button>
      {result && <p className="result">{result}</p>}
    </div>
  );
}
