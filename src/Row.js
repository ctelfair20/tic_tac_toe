import Box from './Box';

const Row = ({ player, computer, setPlayer }) => {
  return (
    <div className="row">
      <Box player={player} computer={computer} setPlayer={setPlayer} />
      <Box player={player} computer={computer} setPlayer={setPlayer} />
      <Box player={player} computer={computer} setPlayer={setPlayer} />
    </div>
  );
}

export default Row;