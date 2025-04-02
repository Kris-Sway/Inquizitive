import { useState, useEffect } from "react";
import { fetchTriviaQuestions } from "../services/api";  // Import API function
import Question from "./components/Question";  // Import Question component
import Score from "./components/Score";        // Import Score component
import "../styles/App.css";        // Import the App.css file for styling

const Quiz = () => {
  const [questions, setQuestions] = useState([]);  // Holds the trivia questions
  const [currentIndex, setCurrentIndex] = useState(0);  // Tracks the current question index
  const [score, setScore] = useState(0);  // Tracks the user's score
  const [loading, setLoading] = useState(true);  // Manages loading state
  const [rateLimited, setRateLimited] = useState(false);  // Manages rate limit state

  useEffect(() => {
    const loadQuestions = async () => {
      const [fetchedQuestions, error] = await fetchTriviaQuestions();  // Fetch questions
      if (error) {
        if (error.message.includes("429")) {
          setRateLimited(true);  // Set rate-limited state
        }
      } else {
        setQuestions(fetchedQuestions);  // Set fetched questions in state
        setLoading(false);  // Set loading to false once data is fetched
      }
    };
    loadQuestions();  // Call the async function to fetch questions
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);  // Increment score if the answer is correct
    }
    setCurrentIndex(currentIndex + 1);  // Move to the next question
  };

  if (rateLimited) {
    return <h2>Too many requests! Please wait and try again later.</h2>;  // Show rate-limit message
  }

  if (loading) return <h2>Loading questions...</h2>;

  if (currentIndex >= questions.length) {
    return <Score score={score} total={questions.length} />;
  }

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
