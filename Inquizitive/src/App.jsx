import React, { useState, useEffect } from "react";
import renderFetch from "./services/renderFetch"; // Correct import path
import "./styles/App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching questions when the component mounts
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const fetchedQuestions = await renderFetch(); // Using renderFetch to get data
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching trivia questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setLoading(true);
  };

  return (
    <div className="quiz-container">
      <h1>Trivia Challenge</h1>
      {loading ? (
        <h2>Loading Questions...</h2>
      ) : gameOver ? (
        <div className="score-container">
          <h2>Game Over!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button onClick={restartQuiz}>Play Again</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="answers">
            {[
              ...questions[currentQuestionIndex].incorrect_answers,
              questions[currentQuestionIndex].correct_answer,
            ]
              .sort(() => Math.random() - 0.5)
              .map((answer, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerClick(
                      answer,
                      questions[currentQuestionIndex].correct_answer
                    )
                  }
                >
                  {answer}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
