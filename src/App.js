import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { useState } from 'react';


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="App">
      <Header score = {score} bestScore = {bestScore}></Header>
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
