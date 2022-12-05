import React from "react";
import Card from "./Card";
import cardArray from "../cardArray";
import selectedCards from "../selectedCards";

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

    const handleClick = (event) => {
        console.log(event.target.id)
        selectedCards.push(event.target.id)
        console.log(selectedCards)
      }

    return(
        <div className="cardContainer">
            {cardArray.map((card) => {
                return(
                <Card   name={card.name} 
                        image={card.image} 
                        key={card.id}
                        id={card.id}
                        handleClick={handleClick}
                        />)
            })}
        </div>
    )
}

export default CardContainer