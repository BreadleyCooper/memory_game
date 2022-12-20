import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import "./styles/card.css"
import "./styles/cardContainer.css"
import selectedCards from './selectedCards';

// Status: 1) randomise the card order on click (will updating the state do this automatically when it rerenders?). 2) implement game logic

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
