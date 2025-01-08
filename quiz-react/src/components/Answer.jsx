import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

function Answer({answerText}) {
    const [quizState, dispatch] = useContext(QuizContext);
    
    return (        
        <div className="answer">
            <div className="answer-letter">A</div>
            <div className="answer-text">{answerText}</div>
        </div>
    )
};

export default Answer;