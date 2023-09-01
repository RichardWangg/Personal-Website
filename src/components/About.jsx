import JavaScriptLogo from '../assets/JavaScript-Logo.png';
import ReactLogo from '../assets/React-Logo.png';
import PythonLogo from '../assets/Python-Logo.png';
import CPPLogo from '../assets/CPP-Logo.png';

export const About = () => {
    return (
        <section id='about'>
            <div style={{ display: "flex", flexDirection: "column", padding: "2rem 3rem 5rem 5rem", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "6rem", width: "85%", paddingTop: "5rem" }}>
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
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "3.5rem", width: "60%" }}>
                    <div className="Experience" style={{ paddingBottom: "1rem" }}>
                        <h1> Experience </h1>
                    </div>
                    <div className="experience-card">
                        <div style={{ display: "flex" }}>
                            <div>
                                <h2>
                                    ReliablyMe:
                                </h2>

                            </div>
                            <div style={{ paddingLeft: "2rem", fontSize: "1.2rem" }}>
                                Redesigned and refactored the admin console web app to improve the user interface, using React. Reorganized the existing website to be more customer-oriented using React and working collaboratively with
                                graphic designers, increasing user engagement by 20%. Changed the existing menu-based chatbot to an OpenAI-integrated full natural language chatbot using the
                                Twilio messaging API, OpenAI API, and Python, leading to a 50% reduction in customer support time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

