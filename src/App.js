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
      <Board player={player} computer={computer} />
      <Instructions player={player} computer={computer} />
    </div>
  );
}

export default App;
