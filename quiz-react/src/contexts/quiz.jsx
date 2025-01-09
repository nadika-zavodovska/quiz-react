import { createContext, useReducer } from "react";
// Import the quiz data that contains the questions
import questions from '../data';
import { shuffleAnswers } from "../helpers";

// Initial state for the quiz context
const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: "",   
    correctAnswersCount: 0, 
};
// The function manages state transitions based on the actions it receives.
const reducer = (state, action) => {
   switch(action.type) {
    case 'SELECT_ANSWER': {
        const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswersCount + 1 : state.correctAnswersCount;
        return {
            ...state,
            currentAnswer: action.payload,
            correctAnswersCount,
        };
    }
    case 'NEXT_QUESTION': {
           const showResults = state.currentQuestionIndex === state.questions.length - 1;
           const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
           const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
           return {
               // Keep all previous state values  
               ...state,
               currentQuestionIndex,
               showResults,
               answers,
               currentAnswer: "",
           };
    }
    case 'RESTART': {
        return initialState
    }
    default: {
        return state;
    }
   }
};

// Create the Quiz context
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
}