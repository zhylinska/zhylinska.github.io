import dataQuestions from "./dataQuestions";
import React, {useState} from "react";
import QuestionCard from "./questionCard";

export default function Questions() {

    const [curActive, setCurActive] = useState(null)

    const questions = dataQuestions.map((question)=>
    <QuestionCard
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer} />
    )



    return (
        <section className="questionsContainer">
            {questions}
        </section>
    )
}


{/*
    const questionCards = dataQuestions.map((question) => {

        return (
            <div key={question.id}>
                <h2 className="title">{question.question}</h2>
                <button className="plus">
                    {isActive ? "-" : "+"}
                </button>
                <p className="text">
                    {isActive ? question.answer : ""}
                </p>
            </div>
        )


        return (
            <div key={question.id}>
                <h2 className="title">{question.question}</h2>
                <button className="plus">

                </button>
                <p className="text">
                    {isActive ? question.answer : ""}
                </p>
            </div>
        )


    })


    return (
        <div>{questionCards}</div>
    )
}
     */
}