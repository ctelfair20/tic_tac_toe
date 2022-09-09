import { useState, useEffect } from 'react';
// import Row from './Row';
import Box from './Box';

const Board = ({ player, computer, setPlayer }) => {
  const [board, setBoard] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
  const [options, setOptions] = useState([]);


  useEffect(() => {
    console.log('board', board);
    if (!player.isTurn) {
      // create an array to hold the empty boxes
      let emptyBoxesIds = [];
      // iterate over the board state
      Object.keys(board).forEach((boxId) => {
        // if box is empty
        if (board[boxId] === '') {
          // push box to array
          emptyBoxesIds.push(boxId);
        }
      });
      setOptions(emptyBoxesIds);
      const randomBoxId = Math.floor(Math.random() * emptyBoxesIds.length).toString();
      const randomBox = emptyBoxesIds[randomBoxId];
      setBoard({ ...board, [randomBox]: computer.char })
      setPlayer({ ...player, isTurn: true })
    }
  }, [board]);

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