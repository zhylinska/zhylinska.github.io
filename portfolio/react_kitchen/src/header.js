import React, {useState} from "react";
import {SlBasket} from "react-icons/sl";
import {RxCross1} from "react-icons/rx"


export default function Header({inBasket, setInBasket, Delete}) {

    const [showMenu, setShowMenu] = useState(false)






    console.log(inBasket)

    const basketItems = inBasket.map((item) => {
        return (
            <li
                className="menuItem basketItem"
                key={item}>
                {item}
                <button
                    onClick={()=> Delete(item)}
                    className="delete">
                    <RxCross1 />
                </button>
            </li>
        )
    })


    return (
        <section className="headerContainer">
            <div className="header">
                <div className="navBlock">
                    <div className="navItem"
                         onClick={() => setShowMenu((prev) => !prev)}
                    >about us
                        <ul>
                            <li className="menuItem"><a className="ref" href="#showcase">history</a></li>
                            <li className="menuItem"><a className="ref" href="#">team</a></li>
                            <li className="menuItem"><a className="ref" href="#slider">our projects</a></li>
                        </ul>
                    </div>
                    <div className="navItem"
                         onClick={() => setShowMenu((prev) => !prev)}
                    >our products
                        <ul>
                            <li className="menuItem">ready</li>
                            <li className="menuItem">ordered</li>
                        </ul>

                    </div>
                </div>
                <div className="logo">logo</div>
                <div className="navBlock">
                    <div className="navItem">contacts
                        <ul>
                            <li className="menuItem"><a className="ref" href="#tel">tel</a></li>
                            <li className="menuItem"><a className="ref" href="#email">Email</a></li>
                        </ul>
                    </div>
                    <div className="navItem basketCounter">
                        <SlBasket/>
                        <p className="basketNumber">{inBasket.length}</p>
                        <div className="inBasket">
                            {inBasket.map((item) =>
                                <ul>
                                    {basketItems}
                                </ul>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}