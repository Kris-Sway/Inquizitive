import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import "./styles/App.css";

const API_URL = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [loading, setLoading] = useState(true);

    // Fetch trivia questions when the component mounts
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch();
                const data = await response.json();
                setQuestions(data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching trivia questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    // Handle user's answer selection
    const handleAnswerClick = (selectedAnswer) => {
        const correctAnswer = questions[currentQuestionIndex].correct_answer;
        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setGameOver(true);
        }
    };

    // Restart the quiz
    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setGameOver(false);
    };

    return (
        <div className="quiz-container">
            <h1>Trivia Challenge</h1>
            {loading ? (
                <h2>Loading Questions...</h2>
            ) : gameOver ? (
                <div className="score-container">
                    <h2>Game Over!</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                    <button onClick={restartQuiz}>Play Again</button>
                </div>
            ) : (
                <Question 
                    question={questions[currentQuestionIndex]} 
                    handleAnswerClick={handleAnswerClick} 
                />
            )}
        </div>
    );
};

export default App;

//Testing
