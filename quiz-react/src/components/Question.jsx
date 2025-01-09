import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

function Question() {
    // Access quiz state and the dispatch function for state updates.
    const [quizState, dispatch] = useContext(QuizContext);
    // Get the current question object.
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    return (
        <div>
            {/* Display the question text */}
            <div className="question">{currentQuestion.question}</div>
            {/* Render answer options */}
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        answerText={answer}
                        key={index}
                        index={index}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        onSelectAnswer={(answerText) =>
                            dispatch({ type: "SELECT_ANSWER", payload: answerText })
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;