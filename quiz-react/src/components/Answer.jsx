import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

function Answer() {
    const [quizState, dispatch] = useContext(QuizContext);
    
    return (        
        <div className="answer">
            <div className="answer-letter">A</div>
            <div className="answer-text">Text of the answer</div>
        </div>
    )
};

export default Answer;