import Question from "./Question";

function Quiz() {
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question />
                <button className="next-button">Next question</button>
            </div>
        </div>
    )
}

export default Quiz