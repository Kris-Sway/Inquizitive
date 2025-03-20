import "../styles/App.css";

const Question = ({ data, handleAnswer }) => {
    const { question, correct_answer, incorrect_answers } = data;
    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5); // Shuffle answers

    return (
        <div className="question-card">
            <h2 dangerouslySetInnerHTML={{ __html: question }}></h2> {/* Renders HTML-encoded text */}
            <div className="answers">
                {answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer === correct_answer)}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
