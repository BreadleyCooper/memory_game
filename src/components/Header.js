// Title of app and score counter
import React, {useState} from "react"

const Header = (props) => {
    const {score, bestScore} = props
    return(
        <div className="headerContainer">
            <div>Don't click on the same Luna twice!</div>
            <div className="scoreContainer">
                <div className="score">Current Score:{score}</div>
                <div className="bestScore">Best Score:{bestScore}</div>
            </div>
        </div>
    )
}

export default Header