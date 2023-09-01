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
                    <h1 style={{ textAlign: "left" }}> Blog Website</h1>
                </div>
                <div style={{ fontSize: "1.4rem", opacity: 0.9 }}>
                    A blogging website where users can login, view, and post their own blogs! This website was made in React, and utilizes a variety of tools. MySQL was used as
                    a database to store user and blog information, and express was used to create a RESTful API to perform CRUD operations with the database and integrate logging in and out.
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
                <img className="blog-gif" src={blog_gif} alt="gif" />
            </div>

        </motion.div>
    )
}

export default BlogWebsite;