import React, {useState} from "react"
import './App.css';
import Header from "./header";
import Showcase from "./showcase";
import Products from "./products";
import Slider from "./slider"
import Footer from "./footer";
import Questions from "./questions";


export default function App() {

    const [inBasket, setInBasket] = useState([])

    function AddToBasket(title) {
        setInBasket((prev) => [...new Set([...inBasket, title])])
    }

    function Delete(item) {
        setInBasket((prev) => inBasket
            .filter(prev => item !== prev))
    }

    return (
        <div className="App">
            <Header
                inBasket={inBasket}
                setInBasket={setInBasket}
                Delete={Delete}
            />
            <Showcase/>
            <Products
                setInBasket={AddToBasket}
                inBasket={inBasket}
                Delete={Delete}
            />
            <Slider/>
            <Questions/>
            <Footer/>
        </div>
    );
}



