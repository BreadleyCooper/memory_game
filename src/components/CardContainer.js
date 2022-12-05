import React from "react";
import Card from "./Card";
import cardArray from "../cardArray";

const CardContainer = (props) => {

    // shuffles the order of cardArray
    const shuffleCardArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    
    // run the shuffle function before render
    shuffleCardArray(cardArray)

    return(
        <div className="cardContainer">
            {cardArray.map((card) => {
                return(
                <Card   name={card.name} 
                        image={card.image} 
                        key={card.id}
                        />)
            })}
        </div>
    )
}

export default CardContainer