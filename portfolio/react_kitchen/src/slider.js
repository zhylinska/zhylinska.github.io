import React, {useState} from "react"
import dataExamples from "./dataExamples";
import {BiSolidLeftArrow} from "react-icons/bi"
import {BiSolidRightArrow} from "react-icons/bi"

export default function Slider() {

    const [activeId, setActiveId] = useState(1)

    function Next() {
        if (activeId === dataExamples.length) {
            setActiveId(prev => 1)
        } else {
            setActiveId(prev => prev + 1)
        }
    }

    function Previous() {
        if (activeId === 1) {
            setActiveId(prev => dataExamples.length)
        } else {
            setActiveId(prev => prev - 1)
        }
    }

    const sliderCards = dataExamples
        .filter((example) => example.id === activeId)
        .map((example) => {
            return (
                <div key={example.id}>
                    <img src={example.img}
                         alt="example"
                         className="sliderImg"/>
                </div>
            )
        })
    return (
        <section id="slider" className="sliderContainer">
            <button
                className="arrow"
                onClick={Previous}><BiSolidLeftArrow/>
            </button>
            {sliderCards}
            <button
                className="arrow"
                onClick={Next}><BiSolidRightArrow/>
            </button>
        </section>
    )

}