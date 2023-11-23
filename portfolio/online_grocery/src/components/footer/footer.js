import "./footer.css"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"

export default function Footer() {
    return (
        <section className="footer">
            <a>tel</a>
            <a>e-mail</a>
            <div className="socialMedia">
                <a><AiFillInstagram/></a>
                <a><BsFacebook/></a>

            </div>
        </section>
    )
}