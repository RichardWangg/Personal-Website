import { motion } from "framer-motion";
import salinity_pic from '../../assets/salinity_pic.jpg';

const Salinity = () => {
    return (
        <motion.div className="project-component"
            initial={{ width: "95%" }}
            animate={{ width: "100%" }}
            style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}
        >
            <div className="card-text">
                <div>
                    <h1 style={{ textAlign: "left" }}> Salinity Testing Device</h1>
                </div>
                <div style={{ fontSize: "1.4rem", opacity: 0.9 }}>
                    A device to detect salt levels in drinking water to ensure that the water is safe using LEDs to show
                    the safety level. An STM32CUBE micro-controller was programmed in C++ using the STM32CubeProgrammerIDE to capture and
                    respond to input from the water.
                </div>
                <div>
                    <a href="https://github.com/RichardWangg">
                        <button className="card-button " >
                            <div className="project-button" style={{ background: "rgba(175, 91, 143, 0.5)" }}>
                                Learn More
                            </div>
                        </button>
                    </a>
                </div>
            </div>

            <div className="gif">
                <img className="salt-pic" src={salinity_pic} alt="gif" />
            </div>

        </motion.div>
    )
}

export default Salinity;