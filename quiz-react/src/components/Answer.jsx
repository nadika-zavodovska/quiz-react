// eslint-disable-next-line react/prop-types
function Answer({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) {
    // Determine the CSS classes based on answer correctness and state, using ternary opeartor (if conditions)
    const letterMapping = ["A", "B", "C", "D"];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";
    return (
        <div
            className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={() => onSelectAnswer(answerText)}>
            {/* Display the letter and text for the answer */}
            <div className='answer-letter'>{letterMapping[index]}</div>
            <div className='answer-text'>{answerText}</div>
        </div>
    );
}

export default Answer;
