import "./card.css"
import React, {useState} from "react";

export default function Card({id, title, price, img, AddToBasket}) {


   const [quantity, setQuantity] = useState(0)

    function Minus() {
        setQuantity(prev => prev >= 1 ? prev - 1 : 0)
    }

    function Plus() {
        setQuantity(prev => prev + 1)
    }

    return (
        <div className="card">
            <img className="itemImg" src={img} alt={title}/>
            <div className="item">
                <div className="itemInfo">
                    <h3>{title}</h3>
                    <span>{price}€/kg</span>
                </div>
                <div className="buttonGroup">
                    <button
                        className="basketButton"
                        onClick={() => Minus(id)}>
                        -
                    </button>
                    <button
                        className="putInBasket"
                        onClick={() => AddToBasket(id, quantity, title, price)}
                    >
                        {quantity} kg
                    </button>
                    <button
                        className="basketButton"
                        onClick={() => Plus(id)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

