import React from "react";
import Card from "./Card";
import cardArray from "../cardArray";
import selectedCards from "../selectedCards";

const CardContainer = (props) => {

    const {incrementScore, resetScore} = props

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

    // on clicking the card, push it's id to the check array
    const handleClick = (event) => {
        // console.log(event.target.id)
        selectedCards.push(event.target.id)
        console.log(selectedCards)
        // check if card selected matches the last previous one
        if (selectedCards.at(-2) === event.target.id) {
            console.log(event.target.id, selectedCards.at(-2), "Correct")
            incrementScore()
        }else {
            console.log("WRONG")
            resetScore()
        }   
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