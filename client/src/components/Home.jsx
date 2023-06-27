import React from "react";
import DailyFact from "./DailyFact";
import downarrow from '../assets/downarrow.png';
import person from '../assets/person.jpg';
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra, ligula nec laoreet fermentum, mauris risus tincidunt ante, sed bibendum mauris ligula vitae velit. Aliquam in nisl nisi. <br></br>
                        <center><Link to="projects" smooth='easeInQuint' duration={500} offset={-100}>
                            <button href="#projects" className="down-arrow">
                                <img src={downarrow} className="image-resize downarrow" alt="Down Arrow" />
                            </button>
                        </Link></center>
                    </body>
                </div>
                <div className="home-right">
                    <div className="face-container">
                        <img src={person} className="face-resize" />
                    </div>
                    <div className="dailyfact-container">
                        <DailyFact />
                    </div>
                </div>
            </div>
        </section>
    )
}
