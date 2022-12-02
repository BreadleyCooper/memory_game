import React from "react";

const Card = (props) => {
    const {image, name} = props

    return (
        <div className="card">
        <img src={require(image)}
             alt={name}
             className="cardImg"></img>
        </div>
    )
}

export default Card