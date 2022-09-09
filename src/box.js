import { useState, useEffect } from 'react';

const Box = ({ id, player, computer, setPlayer, board, setBoard }) => {
  // const [options, setOptions] = useState([]);
  // const [filled, setFilled] = useState('');
  // const [isFilled, setIsFilled] = useState(false);

  // const compTakesTrun = () => {
  //   console.log('comp turn start!', options);
  //   // have comp choose a random box
  //   // use the length of the array and math.random to find one empty box
  //   const randomBox = Math.floor(Math.random() * options.length).toString();
  //   console.log('num', randomBox);
  // fill that box with the comps character
  // setBoard({ ...board, [randomBox]: computer.char })
  // console.log('boardC', board);
  // // update fill var with comps character
  // // update board with this box
  // // update player turn to be true
  // setPlayer({ ...player, isTurn: true })
  // console.log('comp turn complete!');


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