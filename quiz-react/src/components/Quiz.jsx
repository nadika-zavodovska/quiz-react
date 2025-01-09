import Question from "./Question";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

function Quiz() {
    // Get quiz state and dispatch function. The dispatch function to dispatch actions, which can update the state.
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="result-info">
                        <div>You've completed the quiz.</div>
                        <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                        <button className="next-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</button>
                    </div>
                </div>
            )}
            {!quizState.showResults && (<div>
                <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                <Question />
                {/* Button to move to the next question, dispatch function take as a argument action (object)  */}
                <button className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next question</button>
            </div>)}
        </div>
    )
};

export default Quiz;