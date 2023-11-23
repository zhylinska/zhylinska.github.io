import './App.css';
import Navigation from "./components/navigation/navigation";
import Cards from "./components/cards/cards";
import React, {useState} from "react"
import Footer from "./components/footer/footer";

export default function App() {

    const [inBasket, setInBasket] = useState([])

    const [needFilter, setNeedFilter] = useState("all")


    function AddToBasket(id, quantity, title, price) {
        const objIndex = inBasket.findIndex(obj => obj.id === id)

        if (objIndex === -1 && quantity > 0) {
            const newObj = {
                id: id,
                quantity: quantity,
                title: title,
                price: price
            }
            setInBasket(prev => [...inBasket, newObj])

        } else {
            if (quantity >= 1) {
                inBasket[objIndex].quantity = quantity
                setInBasket(prev => [...inBasket])

            } else {
                setInBasket([...inBasket.slice(0, objIndex), ...inBasket.slice(objIndex + 1)])
            }
        }
    }


    return (
        <div className="App">
            <Navigation
                inBasket={inBasket}
                needFilter={needFilter}
                setNeedFilter={setNeedFilter}
            />
            <Cards
                inBasket={inBasket}
                setInBasket={setInBasket}
                AddToBasket={AddToBasket}
                needFilter={needFilter}
                setNeedFilter={setNeedFilter}

            />
            <Footer />
        </div>
    );
}

