import React from "react";
import { motion } from "framer-motion"

const Winner = (props) => {

    const {resetGame} = props

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="winnerContainer">
            
            <div className="winnertext">
                Good Job!
            </div>
            <button onClick={resetGame}>Reset</button>
        </motion.div>
    )
}

export default Winner