import { motion } from "framer-motion"
import blog_gif from '../../assets/blog_gif.gif';


const BlogWebsite = () => {

    return (
        <motion.div className="project-component"
            initial={{ width: "95%" }}
            animate={{ width: "100%" }}
            style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}

        >
            <div className="card-text">
                <div>
                    <h1> Blog Website</h1>
                </div>
                <div style={{ fontSize: "1.4rem", opacity: 0.9 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae iaculis ante.
                    Nunc pulvinar pretium arcu, non posuere elit iaculis et. Maecenas scelerisque ipsum
                    eget arcu fermentum, non venenatis erat varius. Donec in accumsan quam
                </div>
                <div>
                    <button className="card-button ">
                        <div className="project-button" style={{ background: "rgba(175, 91, 143, 0.5)" }}>
                            Learn More
                        </div>
                    </button>
                </div>
            </div>

            <div className="gif">
                <img src={blog_gif} alt="gif" />
            </div>

        </motion.div>
    )
}

export default BlogWebsite;