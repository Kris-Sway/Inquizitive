import { useState, useEffect } from "react";
import { fetchTriviaQuestions } from "../services/api";  // Import API function
import Question from "./Question";  // Import Question component
import Score from "./Score";        // Import Score component
import "../styles/App.css";        // Import the App.css file for styling

const Quiz = () => {
    // State hooks for managing the quiz flow
    const [questions, setQuestions] = useState([]);  // Holds the trivia questions
    const [currentIndex, setCurrentIndex] = useState(0);  // Tracks the current question index
    const [score, setScore] = useState(0);  // Tracks the user's score
    const [loading, setLoading] = useState(true);  // Manages loading state

    // Fetch questions from the API when the component is mounted
    useEffect(() => {
        const loadQuestions = async () => {
            const fetchedQuestions = await fetchTriviaQuestions();  // Fetch questions
            setQuestions(fetchedQuestions);  // Set fetched questions in state
            setLoading(false);  // Set loading to false once data is fetched
        };
        loadQuestions();  // Call the async function to fetch questions
    }, []);

    // Function to handle when a user answers a question
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);  // Increment score if the answer is correct
        }
        setCurrentIndex(currentIndex + 1);  // Move to the next question
    };

    // If the questions are still loading, show a loading message
    if (loading) return <h2>Loading questions...</h2>;

    // If all questions are answered, show the score
    if (currentIndex >= questions.length) {
        return <Score score={score} total={questions.length} />;
    }

    // Render the current question
    return (
        <div className="quiz-container">
            <h1>Trivia Quiz</h1>
            <Question
                data={questions[currentIndex]}  // Pass the current question to Question component
                handleAnswer={handleAnswer}     // Pass the handleAnswer function to handle user responses
            />
        </div>
    );
};

export default Quiz;
