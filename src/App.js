import { useState } from 'react';
import './App.css';
import Board from './Board';
import Instructions from './Instructions';

function App() {
  const [board, setBoard] = useState([]);
  const [player, setPlayer] = useState({ char: null });
  const [computer, setComputer] = useState({ char: null });

  return (
    <div className="App">
      <Board player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} />
      <Instructions player={player} setPlayer={setPlayer} computer={computer} setComputer={setComputer} />
    </div>
  );
}

export default App;
