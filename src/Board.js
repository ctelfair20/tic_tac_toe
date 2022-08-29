import { useState } from 'react';
import Row from './Row';

const Board = ({ player, computer, setPlayer }) => {
  const [board, setBoard] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });

  return (
    <div className="board">
      <Row player={player} computer={computer} setPlayer={setPlayer} setBoard={setBoard} />
      <Row player={player} computer={computer} setPlayer={setPlayer} setBoard={setBoard} />
      <Row player={player} computer={computer} setPlayer={setPlayer} setBoard={setBoard} />
    </div>
  );
}

export default Board;