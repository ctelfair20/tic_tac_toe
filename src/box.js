import { useState } from 'react';

const Box = ({ player, computer }) => {

  const [filled, setFilled] = useState('')

  const handleClick = (e) => {
    setFilled(player.char);
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{filled}</span>
    </div>
  );
}

export default Box;