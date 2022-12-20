import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import "./styles/card.css"
import "./styles/cardContainer.css"
import selectedCards from './selectedCards';

// Status: 1) Only works if you select the same card every time. Need to have it so the cards are reset after each win. (Can i just reset the array back to empty??)

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const incrementScore = () => {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(bestScore + 1)
    }
  }

  const resetScore = () => {
    setScore(score - score)
  }


  return (
    <div className="App">
      <Header score = {score} bestScore = {bestScore}></Header>
      <CardContainer incrementScore={incrementScore} resetScore={resetScore}></CardContainer>
    </div>
  );
}

export default App;
