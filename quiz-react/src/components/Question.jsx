import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

function Question() {
    // Get quiz state and dispatch function. The dispatch function used to send actions to update the state.
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);
    return (
        <div>
            <div className="question">Text of the question</div>
            <div className="answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
};

export default Question;