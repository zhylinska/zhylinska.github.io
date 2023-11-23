import {SlBasket} from "react-icons/sl";
import React, {useState} from "react";


export default function ProductCard({product, setInBasket, inBasket, Delete}) {

    const [showText, setShowText] = useState(false)

    const alreadyInBasket = inBasket.includes(product.title)



    return (
        <div
            className="productCardContainer"
            key={product.id}>
            <div className="productCardBasketContainer">
                <button
                    onClick={() => {alreadyInBasket ? Delete(product.title) : setInBasket(product.title)}}
                    className="productCardBasket">
                    <SlBasket/>
                </button>
                <p className="add_to_basket">{alreadyInBasket ?
                    "Already added" : "Add to basket"}</p>
            </div>
            <img src={product.img}
                 alt={product.title}
                 className="img"/>
            <div className="productCardText">
                <div className="title"
                     onClick={() => setShowText(prev => !prev)}
                >
                    <h3>{product.title}</h3>
                    <button
                        className="red">{showText ? "-" : "+"}
                    </button>
                </div>
                <p className="text">
                    {showText ? product.info : null}</p>
            </div>
        </div>
    )
}