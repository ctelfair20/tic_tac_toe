import { useState } from 'react';
import Row from './Row';

const Board = () => {
  const [board, setBoard] = useState([]);
  const [player, setPlayer] = useState({ char: null });
  const [computer, setComputer] = useState({ char: null });

  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default Board;