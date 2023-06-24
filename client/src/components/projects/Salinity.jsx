import { motion } from "framer-motion"

const Salinity = () => {
    return (
        <motion.div className="card"
            initial={{ width: "80%" }}
            animate={{ width: "100%" }}
        >
            <h1> slaitn</h1>
        </motion.div>
    )
}

export default Salinity;