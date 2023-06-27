import { motion } from "framer-motion"
import blog_gif from '../../assets/blog_gif.gif';


const BlogWebsite = () => {

    return (
        <motion.div className="project-component"
            initial={{ width: "95%" }}
            animate={{ width: "100%" }}
            style={{ backgroundColor: "rgba(26, 125, 238, 0.5)" }}

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
                        <div className="project-button" style={{ background: "rgba(20, 39, 61, 0.5)" }}>
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