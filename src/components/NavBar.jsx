import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { useEffect } from "react";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'


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
        return () => window.removeEventListener("scroll", onScroll)
    }, []) //[], the code itself will only run once, it can still check for scrolling though in that one running of it

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const openLinkedIn = () => {
        window.open('http://www.linkedin.com/in/richard-wang-15230725b', '_blank');
    }

    const openGitHub = () => {
        window.open('https://github.com/RichardWangg', '_blank');
    }

    const openEmail = () => {
        window.open('mailto:richardwangg198@gmail.com', '_blank');
    }

    return (
        <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#"> Richard Wang </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}> Home </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}> Projects </Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}> Contact </Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}> About </Nav.Link>
                        <Nav.Link className={activeLink === 'social' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('social')}>
                            <div className="social-icon">
                                <button onClick={openLinkedIn}><img src={linkedin} alt='LinkedIn' className="image-resize" /></button>
                                <button onClick={openGitHub}><img src={github} alt='GitHub' className="image-resize" /></button>
                                <button onClick={openEmail}><img src={email} alt='' className="image-resize" /></button>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;