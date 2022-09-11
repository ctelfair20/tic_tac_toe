import { useState } from 'react';
import './App.css';
import Board from './Board';
import Instructions from './Instructions';

function App() {
  const [player, setPlayer] = useState({ char: null, isTurn: true });
  const [computer, setComputer] = useState({ char: null });
  const [winner, setWinner] = useState(null);
  const [isOver, setIsOver] = useState(false);

  return (
    <div className="App">
      <Board player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} setWinner={setWinner} setIsOver={setIsOver} isOver={isOver} />
      <Instructions player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} winner={winner} isOver={isOver} />
    </div>
  );
}

export default App;
