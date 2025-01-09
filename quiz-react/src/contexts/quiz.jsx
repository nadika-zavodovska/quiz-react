import { createContext, useReducer } from "react";
import { shuffleAnswers, normalizeQuestions } from "../helpers";

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
    showResults: false,
    answers: [],
    currentAnswer: "",
    correctAnswersCount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            // Update the correct answers count if the selected answer is correct.
            const correctAnswersCount =
                action.payload ===
                    state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswersCount + 1
                    : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
            };
        }
        case "NEXT_QUESTION": {
            // Move to the next question or show results if it's the last question.
            const showResults =
                state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;
            const answers = showResults
                ? []
                : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: "",
            };
        }
        case "RESTART": {
            // Reset the state to initial values.
            return initialState;
        }
        case "LOADED_QUESTIONS": {
            // Normalize and store fetched questions, shuffle answers for the first question.
            const normalizedQuestions = normalizeQuestions(action.payload);
            return {
                ...state,
                questions: normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0]),
            };
        }
        default: {
            // Default state for unrecognized actions.
            return state;
        }
    }
};

// Create a context for quiz state.
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    // Provide state and dispatch function to the entire application.
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};