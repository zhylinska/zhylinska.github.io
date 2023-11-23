import "./shoppingCart.css"
import {SlBasket} from "react-icons/sl"

export default function ShoppingCart({inBasket}) {


    const totalSum = inBasket.reduce(
        (itemSum, obj) => itemSum + obj.price * obj.quantity,
        0).toFixed(2)

    const basketItems = inBasket.map(obj => {

        const itemPrice = obj.price * obj.quantity.toFixed(2)

        return (<div
            key={obj.id}
            className="basketItem"
        >
            <div>{obj.title}</div>
            <div>{obj.quantity}kg</div>
            <div>{itemPrice}€</div>
        </div>)
    })

    return (<div className="basket">
        <SlBasket/>
        <p className="basketCount">{inBasket.length}</p>
        <div className="basketItems">
            {basketItems}
            <p className="basketTotal">Total: {totalSum}€</p>
        </div>
    </div>)
}