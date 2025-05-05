import JavaScriptLogo from '../assets/JavaScript-Logo.png';
import ReactLogo from '../assets/React-Logo.png';
import PythonLogo from '../assets/Python-Logo.png';
import CPPLogo from '../assets/CPP-Logo.png';
import ReliablyMeLogo from '../assets/ReliablyMe-Logo.png';
import BoCLogo from '../assets/BoC-Logo.jpeg';
import UWFELogo from '../assets/UWFE-Logo.jpg';
import FordLogo from '../assets/Ford-Logo.jpg';
import FordProLogo from "../assets/Ford-Pro-Logo.png";

export const About = () => {
    return (
        <section id='about'>
            <div style={{ display: "flex", flexDirection: "column", padding: "2rem 3rem 5rem 2rem", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "4.5rem", paddingTop: "3.5rem", width: "55%" }}>
                    <div className="Experience" style={{ paddingBottom: "1rem" }}>
                        <h1> Experience </h1>
                    </div>
                    <div className="experience-card">
                        <div style={{ display: "flex", flexDirection: "row", paddingBottom: "2rem" }}>
                            <div>
                                <img src={FordProLogo} alt='react' className='ford-pro-resize' />
                            </div>
                            <div className='experience-title-container'>
                                <h2> Ford Pro <span style={{ fontWeight: 'lighter' }}> - </span> <span style={{ fontSize: "1.75rem", fontWeight: "normal" }}> Software Engineer </span> </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", paddingBottom: "2rem" }}>
                            <div>
                                <img src={FordLogo} alt='react' className='ford-resize' />
                            </div>
                            <div className='experience-title-container'>
                                <h2> Ford Motor Company <span style={{ fontWeight: 'lighter' }}> - </span> <span style={{ fontSize: "1.75rem", fontWeight: "normal" }}> Software Developer </span> </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", paddingBottom: "2rem" }}>
                            <div>
                                <img src={BoCLogo} alt='react' className='BoC-resize' />
                            </div>
                            <div className='experience-title-container'>
                                <h2> Bank of Canada <span style={{ fontWeight: 'lighter' }}> - </span> <span style={{ fontSize: "1.75rem", fontWeight: "normal" }}> Web Developer </span> </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", paddingBottom: "2rem" }}>
                            <div>
                                <img src={ReliablyMeLogo} alt='react' className='reliablyMe-resize' />
                            </div>
                            <div className='experience-title-container'>
                                <h2> ReliablyMe <span style={{ fontWeight: 'lighter' }}> - </span> <span style={{ fontSize: "1.75rem", fontWeight: "normal" }}> Full-Stack Developer </span> </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div>
                                <img src={UWFELogo} alt='react' className='UWFE-resize' />
                            </div>
                            <div className='experience-title-container'>
                                <h2> UWFE <span style={{ fontWeight: 'lighter' }}> - </span> <span style={{ fontSize: "1.75rem", fontWeight: "normal" }}> Software Developer </span> </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "3.5rem", width: "85%" }}>
                    <div className="Skills" style={{ paddingBottom: "1rem" }}>
                        <h1> Skills </h1>
                    </div>
                    <div className="about-card">
                        <div><img src={ReactLogo} alt='react' className='react-resize' /></div>
                        <div><img src={JavaScriptLogo} alt='react' className='js-resize' /></div>
                        <div style={{ paddingRight: "3rem" }}><img src={PythonLogo} alt='react' className='python-resize' /></div>
                        <div><img src={CPPLogo} alt='react' className='cpp-resize' /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

