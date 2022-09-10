import { useState, useEffect } from 'react';
import Box from './Box';

const Board = ({ player, computer, setPlayer }) => {
  const [board, setBoard] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
  const [options, setOptions] = useState([])

  useEffect(() => {
    //stateful variables don't work inside of the setTimeout
    setTimeout(() => {
      // create an array to hold the empty boxes
      console.log('did this run?');
      let emptyBoxesIds = [];
      if (!player.isTurn) {
        console.log('or this?');
        // iterate over the board state
        Object.keys(board).forEach((boxId) => {
          // if box is empty
          if (board[boxId] === '') {
            // push box to array
            emptyBoxesIds.push(boxId);
          }
        });
        // update possible comp options in state. Ex: options = [2, 3, 5, 8]
        setOptions(emptyBoxesIds);
        // randomly select an option index. Ex: option indices = 0 - 3
        const randomBoxId = Math.floor(Math.random() * emptyBoxesIds.length);
        // select the box to be chosen by the comp by accessing the options array at the random option index
        const randomBox = emptyBoxesIds[randomBoxId];
        setBoard({ ...board, [randomBox]: computer.char })
        setPlayer({ ...player, isTurn: !player.isTurn })
      }
    }, 1000);
    // if emptyBoxesIds is empty, there are no more moves to make
    // if (options.length === 0 && Object.keys(board).every(box => board[box] !== '')) {
    //   console.log("draw!", options);
    // } else {
    //   console.log('not done', options);
    // }
  }, [board]);

  const gameOver = () => {
    // is there a winner?
    // maybe use a switch case to decide if there is three in a row
  }

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
    </div>
  );
}

export default Board;