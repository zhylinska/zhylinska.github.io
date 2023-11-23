import data from "../data"
import Card from "../card/card"
import "./cards.css"


export default function Cards({inBasket, AddToBasket, setInBasket, needFilter}) {
    let cards
        if(needFilter === "veg") {
        cards = data.filter(item => item.type === "vegetable")
            .map(item => {
                return (
                    <Card
                        img={item.img}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        info={item.info}
                        inBasket={inBasket}
                        AddToBasket={AddToBasket}
                        setInBasket={setInBasket}
                    />
                )
            })
    }
else if (needFilter === "fruit") {
        cards = data.filter(item => item.type === "fruit")
            .map(item => {
                return (
                    <Card
                        img={item.img}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        info={item.info}
                        inBasket={inBasket}
                        AddToBasket={AddToBasket}
                        setInBasket={setInBasket}
                    />
                )
            })
    } else {
        cards = data.map(item => {
            return (
                <Card
                    img={item.img}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    info={item.info}
                    inBasket={inBasket}
                    AddToBasket={AddToBasket}
                    setInBasket={setInBasket}
                />
            )
        })
    }


    return (
        <section className="cardsContainer">
            {cards}
        </section>
    )
}