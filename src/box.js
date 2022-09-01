import { useState } from 'react';

const Box = ({ id, player, computer, setPlayer, board, setBoard }) => {
  const [filled, setFilled] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const updateBoard = (id) => {
    setBoard({ ...board, [id]: player.char });
  }

  const compTakesTrun = () => {
    console.log('is the comps turn');
    // find all the empty boxes
    // create an array to hold the empty boxes
    let emptyBoxesIds = [];
    // iterate over the board state
    Object.keys(board).map((id) => {
      console.log(id);
      // if (board[id] === '') {
      //   emptyBoxesIds.push(id);
      // }
    });
    // console.log(emptyBoxesIds);
    // if box is empty
    // push box to array
    // have comp choose a random box
    // use the length of the array and math.random to find one empty box
    // fill that box with the comps character
    // update fill var with comps character
    // update board with this box
    // update player turn to be true
    console.log('comp turn complete!');
  }

  const handleClick = (e) => {
    // fills in box chosen by user
    setFilled(player.char);
    // tells the computer this box is taken
    setIsFilled(true);
    // ensure the state of the board is up-to-date
    updateBoard(id);
    // lets the computer know when to take its turn
    setPlayer({ ...player, isTurn: !player.isTurn });
    // console.log('handle click board :', board);
    compTakesTrun();
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{filled}</span>
    </div>
  );
}

export default Box;