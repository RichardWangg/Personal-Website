import React from "react";
import downarrow from '../assets/downarrow.png';
import my_face from '../assets/my_face.JPG'
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'

const openLinkedIn = () => {
    window.open('http://www.linkedin.com/in/richard-wang-15230725b', '_blank');
}

const openGitHub = () => {
    window.open('https://github.com/RichardWangg', '_blank');
}

const openEmail = () => {
    window.open('mailto:richardwangg198@gmail.com', '_blank');
}

export const Home = () => {
    return (
        <section className="home" id="homes">
            <div className="home-container">
                <div className="home-left">
                    <div className="h1-container"><h1> Hello! I'm <p style={{ opacity: 0 }}>|</p>
                        <div className="type-writer"><Typewriter
                            options={{
                                strings: ['Richard Wang', 'A Software Developer', 'A Student', 'A Web Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                pauseFor: 1000,
                            }}
                        /></div>
                    </h1></div>
                    <body>
                        An aspiring software developer with skills in varying fields. I'm a student at the University of Waterloo
                        studying computer engineering.
                        <br></br>
                        <div className="home-buttons">
                            <div>
                                <button onClick={openLinkedIn}><img src={linkedin} alt='LinkedIn' className="image-resize downarrow" /></button>

                            </div>
                            <div>
                                <button onClick={openGitHub}><img src={github} alt='GitHub' className="image-resize downarrow" /></button>

                            </div>
                            <div>
                                <button onClick={openEmail}><img src={email} alt='' className="image-resize downarrow" /></button>

                            </div>
                            <div>
                                <Link to="about" smooth='easeInQuint' duration={500} offset={-100}>
                                    <button href="#about" className="down-arrow">
                                        <img src={downarrow} className="image-resize downarrow" alt="Down Arrow" />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </body>
                </div>
                <div className="home-right">
                    <div className="face-container">
                        <img src={my_face} alt='react' className="face-resize" />
                    </div>
                    {/* <div className="dailyfact-container">
                        <DailyFact />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
