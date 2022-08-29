// import { useState } from 'react';
import Row from './Row';

const Board = ({ player, computer, setPlayer }) => {

  return (
    <div className="board">
      <Row player={player} computer={computer} setPlayer={setPlayer} />
      <Row player={player} computer={computer} setPlayer={setPlayer} />
      <Row player={player} computer={computer} setPlayer={setPlayer} />
    </div>
  );
}

export default Board;