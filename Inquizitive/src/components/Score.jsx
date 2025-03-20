import "../styles/App.css";  // Import App.css for styling

const Score = ({ score, total }) => {
    // Calculate the percentage of correct answers
    const percentage = ((score / total) * 100).toFixed(2);

    return (
        <div className="score-container">
            <h2>Quiz Complete!</h2>
            <p>You answered {score} out of {total} questions correctly.</p>
            <p>Your score: {percentage}%</p>

            {/* Display different messages based on score */}
            {percentage >= 80 && <p>Great job! You're a trivia master!</p>}
            {percentage >= 50 && percentage < 80 && <p>Good effort! You know your stuff!</p>}
            {percentage < 50 && <p>Don't worry, there's always next time!</p>}

            {/* Button to restart the quiz */}
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );
};

export default Score;
