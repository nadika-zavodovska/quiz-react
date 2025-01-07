import { createContext, useReducer } from "react";
// Import the quiz data that contains the questions
import data from '../data';

// Initial state for the quiz context
const initialState = {
    questions: data,
    currentQuestionIndex: 0,
};
// The function manages state transitions based on the actions it receives.
const reducer = (state, action) => {
    console.log("reducer", state, action);
    // Check if we click the button
    if (action.type === "NEXT_QUESTION") {
        // Keep all previous state values
        return {
            ...state,
            // Increment the question index
            currentQuestionIndex: state.currentQuestionIndex + 1,
        };
    }
    // If no matching action, return the current state unchanged
    return state;
};

// Create the Quiz context
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
}