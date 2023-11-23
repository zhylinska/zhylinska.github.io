import {useState} from "react";


export default function QuestionCard({id, question, answer}) {
    const [curActive, setCurActive] = useState(null)


    const isActive = curActive === id

    function Toggle() {
        setCurActive(isActive ? null : id)
    }

    return (
        <div className="questionCard">
            <div
                className="question"
                onClick={() => Toggle(isActive)}
            >
                <h3>question</h3>
                <button
                    className="red"
                >{isActive ? "-" : "+"}
                </button>
            </div>
            <p className="answer">{isActive && answer}</p>
        </div>
    )
}