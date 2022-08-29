import { useState } from 'react';
// import Row from './Row';
import Box from './Box';

const Board = ({ player, computer, setPlayer }) => {
  const [board, setBoard] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });

  const mapBoxes = (array) => {
    return array.map((num) => {
      return (
        <Box key={num} id={num} player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
      );
    });
  };

  return (
    <div className="board">
      <div className="row">
        {mapBoxes([0, 1, 2])}
      </div>
      <div className="row">
        {mapBoxes([3, 4, 5])}
      </div>
      <div className="row">
        {mapBoxes([6, 7, 8])}
      </div>
      {/* <Row player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
      <Row player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
      <Row player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} /> */}
    </div>
  );
}

export default Board;