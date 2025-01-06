import Question from "./Question";
import { useReducer } from "react";

const initialState = {
    question: [],
    currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    console.log("reducer", state, action);
    if (action.type === "NEXT_QUESTION") {
        return{
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
        };
    }
    return state;
}

function Quiz() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state", state);
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question />
                <button className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next question</button>
            </div>
        </div>
    )
}

export default Quiz