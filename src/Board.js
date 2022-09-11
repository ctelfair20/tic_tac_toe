import { useState, useEffect } from 'react';
import Box from './Box';

const Board = ({ player, computer, setPlayer, setWinner, setIsOver, isOver }) => {
  const [board, setBoard] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
  const [game, setGame] = useState({
    winnerOptions: [
      //rows
      { 0: '', 1: '', 2: '' }, { 3: '', 4: '', 5: '' }, { 6: '', 7: '', 8: '' },
      // columns
      { 0: '', 3: '', 6: '' }, { 1: '', 4: '', 7: '' }, { 2: '', 5: '', 8: '' },
      //diag
      { 0: '', 4: '', 8: '' }, { 2: '', 4: '', 6: '' }
    ],
  });

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
        // randomly select an option index. Ex: option indices = 0 - 3
        const randomBoxId = Math.floor(Math.random() * emptyBoxesIds.length);
        // select the box to be chosen by the comp by accessing the options array at the random option index
        const randomBox = emptyBoxesIds[randomBoxId];
        setBoard({ ...board, [randomBox]: computer.char })
        setPlayer({ ...player, isTurn: !player.isTurn })
      }
    }, 1000);

    // if game.isOver is false

    // create winner variable --- call to whowon
    // if winner is a string

    //
  }, [board]);

  const whoWon = () => {
    // is there a winner?
    // counter for O
    // counter for X
    // counter for spaces --- true or false
    // iterate over game.winnerOptions - look at each option
    // iterate over all the values
    // if value is an O
    // increment O
    // if value is an X
    // increment X
    // if value is a space
    // set space to true
    //
    // end inner loop
    // if there are 3 O
    // figure out who is O
    // change player.char to null --- prevent more turns by the player
    // change player.isTurn to null
    // change game.isOver to true  --- prevent the useEffect from running again
    // set winner to "_____ winners!"
    // return true
    // if there are 3 x
    // figure out who is X
    // change player.char to null --- prevent more turns by the player
    // change player.isTurn to null
    // change game.isOver to true
    // set winner to "_____ winners!"
    // return true
    //
    // end outter loop
    // check if all boxes are fill ---- its a draw
    // change game.isOver to true
    // change player.char to null --- prevent more turns by the player
    // return "Its a draw!"
    // else
    // return false
    //
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