import React from "react";
import "./navigation.css"
import {GiBellPepper} from "react-icons/gi"
import ShoppingCart from "../shoppingCart/shoppingCart";

export default function Navigation({inBasket, needFilter, setNeedFilter}) {

    return (
        <section className="navigationContainer">
            <ul className="navigation">
                <li className="navItem"
                    onClick={() => setNeedFilter(prev => "all")}
                >home
                </li>
                <li className="navItem products">products
                    <ul className="navProducts">
                        <li onClick={() => setNeedFilter(prev => "all")}
                            className={needFilter === "all" ? "product active" : "product"}>
                            all products
                        </li>
                        <li onClick={() => setNeedFilter(prev => "veg")}
                            className={needFilter === "veg" ? "product active" : "product"}>
                            vegetables
                        </li>
                        <li onClick={() => setNeedFilter(prev => "fruit")}
                            className={needFilter === "fruit" ? "product active" : "product"}>
                            fruit
                        </li>
                    </ul>
                </li>
                <li className="logo">BE<GiBellPepper/>GREEN</li>
                <li className="navItem">contacts</li>
                <li className="navItem">
                    <ShoppingCart
                        inBasket={inBasket}
                    />
                </li>
            </ul>
        </section>
    )
}