import { useState } from 'react';
import Row from './Row';

const Board = ({ player, computer }) => {

  return (
    <div className="board">
      <Row player={player} computer={computer} />
      <Row player={player} computer={computer} />
      <Row player={player} computer={computer} />
    </div>
  );
}

export default Board;