import { motion } from "framer-motion"
import { useState } from "react";

const BlogWebsite = () => {
    const [firstRun, setFirstRun] = useState(true);


    return (
        <motion.div className="card"
            initial={{ width: "80%" }}
            animate={{ width: "100%" }}

        >
            <h1> BLog Website</h1>
        </motion.div>
    )
}

export default BlogWebsite;