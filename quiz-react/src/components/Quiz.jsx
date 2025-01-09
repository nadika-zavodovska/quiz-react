import Question from "./Question";
import { useContext, useEffect } from "react";
import { QuizContext } from "../contexts/quiz";

function Quiz() {
    // Access quiz state and the dispatch function to update the state.
    const [quizState, dispatch] = useContext(QuizContext);
    // URL to fetch quiz questions from the Open Trivia Database API.
    const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

    useEffect(() => {
        // If questions are already loaded, skip fetching again.
        if (quizState.questions.length > 0) {
            return;
        }
        // Fetch questions and dispatch the data to update state.
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
            });
    });
    return (
        <div className="quiz">
            {/* Show results if the quiz is completed */}
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>
                            You've got {quizState.correctAnswersCount} of{" "}
                            {quizState.questions.length}
                        </div>
                    </div>
                    <div
                        className="next-button"
                        onClick={() => dispatch({ type: "RESTART" })}
                    >
                        Restart
                    </div>
                </div>
            )}
            {/* Display the current question and navigation controls if the quiz is ongoing */}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </div>
                    <Question />
                    <div
                        className="next-button"
                        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                    >
                        Next question
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;