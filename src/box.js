import { useState } from 'react';

const Box = ({ player, computer, setPlayer }) => {
  const [filled, setFilled] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const compTakesTrun = () => {
    console.log('is the comps turn');
    // have comp choose a random box
    // fill that box with the comps character
    // switch isturn to true
    console.log('comp turn complete!');
  }

  const handleClick = (e) => {
    setFilled(player.char);
    setIsFilled(true);
    setPlayer({ ...player, isTurn: !player.isTurn })
    compTakesTrun();
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{filled}</span>
    </div>
  );
}

export default Box;