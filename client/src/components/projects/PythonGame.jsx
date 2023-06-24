import { motion } from "framer-motion"

const PythonGame = () => {
    return (
        <motion.div className="card"
            initial={{ width: "80%" }}
            animate={{ width: "100%" }}
        >
            <h1> python</h1>
        </motion.div>
    )
}

export default PythonGame;