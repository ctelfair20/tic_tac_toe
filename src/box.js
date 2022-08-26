import { useState } from 'react';

const Box = ({ player, computer }) => {

  const [filled, setFilled] = useState('')

  const handleClick = () => {

  }

  return (
    <div className="box" onClick={handleClick}>{filled}</div>
  );
}

export default Box;