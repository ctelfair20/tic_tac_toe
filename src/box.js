import { useState, useEffect } from 'react';

const Box = ({ id, player, computer, setPlayer, board, setBoard }) => {
  // const [filled, setFilled] = useState('');
  // const [isFilled, setIsFilled] = useState(false);

  // const updateBoard = (id) => {
  //   setBoard({ ...board, [id]: player.char });
  // }

  const compTakesTrun = () => {
    // find all the empty boxes
    // create an array to hold the empty boxes
    let emptyBoxesIds = [];
    console.log('board', board);
    // iterate over the board state
    Object.keys(board).map((boxId) => {
      // if box is empty
      if (board[boxId] === '') {
        // push box to array
        emptyBoxesIds.push(boxId);
      }
    });
    console.log('options', emptyBoxesIds);
    // have comp choose a random box
    // use the length of the array and math.random to find one empty box
    const randomBox = Math.floor(Math.random() * emptyBoxesIds.length).toString();
    console.log('num', randomBox);
    // fill that box with the comps character
    setBoard({ ...board, [randomBox]: computer.char })
    // update fill var with comps character
    // update board with this box
    // update player turn to be true
    setPlayer({ ...player, isTurn: true })
    console.log('comp turn complete!');
  }

  const handleClick = (e) => {
    // ensure the state of the board is up-to-date
    setBoard({ ...board, [id]: player.char });
    // lets the computer know when to take its turn
    setPlayer({ ...player, isTurn: !player.isTurn });
    ///////////////////////think about using useEffect to tell the computer to take its turn//////////
    // compTakesTrun();
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{board[id]}</span>
    </div>
  );
}

export default Box;