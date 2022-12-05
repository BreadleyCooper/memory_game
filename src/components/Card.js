import React from "react";
import cardArray from "../cardArray";
import selectedCards from "../selectedCards";

const Card = (props) => {
    const {image, name, id, handleClick} = props



    return (
        <div className="card">
        <img src={image}
             alt={name}
             className="cardImg"
             id={id}
             onClick={handleClick}></img>
        </div>
    )
}

export default Card