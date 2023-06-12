import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { useEffect } from "react";


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false); //array deconstruction, this is same as array = useState(), array[0] = scrolled, array[1] = setScrolled
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)
        console.log(window.scrollY)
        console.log(scrolled)
        return () => window.removeEventListener("scroll", onScroll)
    }, []) //[], the code itself will only run once, it can still check for scrolling though in that one running of it

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#"> Home </Nav.Link>
                        <Nav.Link href="#projects"> Projects </Nav.Link>
                        <Nav.Link href="#contact"> Contact </Nav.Link>
                        <Nav.Link href="#about"> About </Nav.Link>
                    </Nav>
                    <span>


                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;