import React, {useState} from "react"

export default function Showcase() {
    const [showText, setShowText] = useState(false)

    return (
        <section id="showcase" className="showcaseContainer">
            <img className="img" src="/img/showcase_background.jpg" alt="img"/>
            <div className="showcaseText">
                <div className="title"
                     onClick={()=>setShowText(prev=> !prev)}
                >
                    <h1 className="title">unternehmen: pro-küchemontage</h1>
                    <button

                        className="red h">{showText? "-" : "+"}
                    </button>
                </div>
                <p className="text">{showText && "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, itaque mollitia nemo officiis reiciendis vero? Aliquid, animi atque eaque et expedita facilis illo minima nisi numquam odio quisquam ratione voluptates?"}</p>
            </div>
        </section>
    )
}