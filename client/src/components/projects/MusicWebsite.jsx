import { motion } from "framer-motion"
import music_gif from '../../assets/music_gif.gif';


const MusicWebsite = () => {

    return (
        <motion.div className="project-component"
            initial={{ width: "95%" }}
            animate={{ width: "100%" }}
            style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}

        >
            <div className="card-text">
                <div>
                    <h1 style={{ textAlign: "left" }}> Music Charting Website</h1>
                </div>
                <div style={{ fontSize: "1.4rem", opacity: 0.9 }}>
                    A website that displays the top 50 songs and albums of the month.
                    The site was created in React, and a RESTful API was created using Express and GraphiQL. Data for the API was scraped and parsed from the web using Python.
                    The website also takes advantage of the spotify API, which is used to grab lyrics and tracklists.
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
                <img className="music-gif" src={music_gif} alt="gif" />
            </div>

        </motion.div>
    )
}

export default MusicWebsite;