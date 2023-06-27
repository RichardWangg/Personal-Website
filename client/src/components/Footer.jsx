import { color } from "framer-motion";
import { Link } from "react-scroll";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'

export const Footer = () => {
    return (
        <section id="footer">

            <div>
                <Link to="home" smooth='easeInQuint' duration={500} offset={-100}>
                    <button> <h1 style={{ color: "white" }}> Richard Wang </h1></button>
                </Link>
            </div>
            <div>
                <div className="social-icon-footer">
                    <a href='http://www.linkedin.com/in/richard-wang-15230725b'  ><img src={linkedin} alt='LinkedIn' className="image-resize" /></a>
                    <a href='https://github.com/RichardWangg' ><img src={github} alt='GitHub' className="image-resize" /></a>
                    <Link to="contact" smooth='easeInQuint' duration={500} offset={-100}>

                        <a href='#contact' ><img src={email} alt='' className="image-resize" /></a>
                    </Link>
                </div>
            </div>


        </section >
    )
}