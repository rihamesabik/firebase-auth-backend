import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { lessonData } from "../data/lessonData";
import QuizPopup from "./QuizPopup";

const VideoPlayer: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const found = lessonData.qcm.find((qcm, index) =>
      Math.floor(playedSeconds) === qcm.time && !answeredQuestions.includes(index)
    );
    if (found) {
      setCurrentQuestion(found);
      setShowQuiz(true);
      setIsPlaying(false); // pause la lecture à l’apparition du quiz
    }
  }, [playedSeconds]);

  const handleAnswer = (isCorrect: boolean, index: number) => {
    if (isCorrect) alert("✅ Bonne réponse !");
    else alert("❌ Mauvaise réponse !");
    setShowQuiz(false);
    setAnsweredQuestions(prev => [...prev, index]);
    setIsPlaying(true); // relance la lecture après réponse
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Lecture audio en cours</h1>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <ReactPlayer
        url={lessonData.videoUrl}
        controls
        playing={isPlaying}
        onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
        width="100%"
        height="50px"  // taille réduite pour ressembler à un player audio
      />

      {showQuiz && currentQuestion && (
        <QuizPopup
          question={currentQuestion}
          index={lessonData.qcm.indexOf(currentQuestion)}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
