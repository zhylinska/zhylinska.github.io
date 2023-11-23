import React from "react"
import dataProducts from "./dataProducts"
import ProductCard from "./productCard";

export default function Products({setCounter, setInBasket, inBasket, Delete}) {

    const productCards = dataProducts.map(product => {
        return (
            <ProductCard
                setCounter={setCounter}
                product={product}
                setInBasket={setInBasket}
                inBasket={inBasket}
                Delete={Delete}
                key={product.id}
            />
        )
    })
    return (
        <section className="products">
            {productCards}
        </section>
    )
}