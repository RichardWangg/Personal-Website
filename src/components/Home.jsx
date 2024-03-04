import React from "react";
import downarrow from '../assets/downarrow.png';
import my_face from '../assets/my_face.JPG'
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

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
                        <center><Link to="projects" smooth='easeInQuint' duration={500} offset={-100}>
                            <button href="#projects" className="down-arrow">
                                <img src={downarrow} className="image-resize downarrow" alt="Down Arrow" />
                            </button>
                        </Link></center>
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
