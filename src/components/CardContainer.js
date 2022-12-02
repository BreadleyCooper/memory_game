import React from "react";
import Card from "./Card";
import cardArray from "../cardArray";

const CardContainer = (props) => {
    return(
        <div className="cardContainer">
            {cardArray.map((card) => {
                return(
                <Card   name={card.name} 
                        image={card.image} 
                        key={card.id}/>)
            })}
        </div>
    )
}

export default CardContainer