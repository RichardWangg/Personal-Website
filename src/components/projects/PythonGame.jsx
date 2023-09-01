import { motion } from "framer-motion";
import game_gif from '../../assets/game_gif.gif';

const PythonGame = () => {
    return (
        <motion.div className="project-component"
            initial={{ width: "95%" }}
            animate={{ width: "100%" }}
            style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}

        >
            <div className="card-text">
                <div>
                    <h1 style={{ textAlign: "left" }}> Python</h1>
                </div>
                <div style={{ fontSize: "1.4rem", opacity: 0.9 }}>
                    A fun 1v1 shooter game for 1 or 2 players. Play locally against your friends or against an AI. Characters are controlled with keyboard inputs and are fully
                    equiped with animations. The game was created in Python using Pygame to run the game environment.
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
                <img className="python-gif" src={game_gif} alt="gif" />
            </div>

        </motion.div>
    )
}

export default PythonGame;