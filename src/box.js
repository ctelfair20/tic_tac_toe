import { useState } from 'react';

const Box = ({ player, computer, setPlayer }) => {
  const [filled, setFilled] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  // const [test, setTest] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' })
  // const [test, setTest] = useState({ one: '', two: '' })


  // const testObj = () => {
  //   setTest({ ...test, 0: "X" })
  //   console.log(test)
  // }

  const compTakesTrun = () => {
    console.log('is the comps turn');
    // have comp choose a random box
    // fill that box with the comps character
    // switch isturn to true
    console.log('comp turn complete!');
  }

  const handleClick = (e) => {
    // fills in box chosen by user
    setFilled(player.char);
    // tells the computer this box is taken
    setIsFilled(true);
    // lets the computer know when to take its turn
    setPlayer({ ...player, isTurn: !player.isTurn });
    // compTakesTrun();
    // testObj();
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{filled}</span>
    </div>
  );
}

export default Box;