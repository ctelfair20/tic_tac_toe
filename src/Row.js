import Box from './Box';

const Row = ({ player, computer, setPlayer, board, setBoard }) => {
  return (
    <div className="row">
      <Box player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
      <Box player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
      <Box player={player} computer={computer} setPlayer={setPlayer} board={board} setBoard={setBoard} />
    </div>
  );
}

export default Row;