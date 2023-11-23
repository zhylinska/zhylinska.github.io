import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"



export default function Footer() {
    return (
        <section
            id="footer"
            className="footerContainer">
            <a id="email">Email</a>
            <a id="tel">Telephone</a>
            <div className="smedia">
                <a className="contactIcon"><BsFacebook /></a>
                <a className="contactIcon"><AiFillInstagram /></a>
            </div>
        </section>
    )
}