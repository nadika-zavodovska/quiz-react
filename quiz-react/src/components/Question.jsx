import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

function Question() {
    // Get quiz state and dispatch function. The dispatch function used to send actions to update the state.
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    // It's better don't use index, use id for larger projects where we can delete index
                    <Answer key={index} index={index} answerText={answer} correctAnswer={currentQuestion.correctAnswer} currentAnswer={quizState.currentAnswer} onSelectAnswer={(answerText) => dispatch({ type: 'SELECT_ANSWER', payload: answerText })} />
                ))}
            </div>
        </div>
    )
};

export default Question;