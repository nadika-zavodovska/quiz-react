import Question from "./Question";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

function Quiz() {
    // Get quiz state and dispatch function. The dispatch function to dispatch actions, which can update the state.
    const [quizState, dispatch] = useContext(QuizContext);
    
    return (
        <div className="quiz">
            <div>
                <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                <Question />
                {/* Button to move to the next question, dispatch function take as a argument action (object)  */}
                <button className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next question</button>
            </div>
        </div>
    )
};

export default Quiz;