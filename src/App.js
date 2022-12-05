import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import "./styles/card.css"
import "./styles/cardContainer.css"
import selectedCards from './selectedCards';


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const handleCardClick = (card) => {
    selectedCards.push(card.id)
  }

  return (
    <div className="App">
      <Header score = {score} bestScore = {bestScore}></Header>
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
