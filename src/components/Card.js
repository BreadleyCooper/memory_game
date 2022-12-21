import React from "react";
import cardArray from "../cardArray";
import selectedCards from "../selectedCards";
import { motion } from "framer-motion"

const Card = (props) => {
    const {image, name, id, handleClick} = props



    return (
        <motion.div className="card" whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}>
        <img src={image}
             alt={name}
             className="cardImg"
             id={id}
             onClick={handleClick}></img>
        </motion.div>
    )
}

export default Card