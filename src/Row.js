import Box from './Box';

const Row = ({ player, computer }) => {
  return (
    <div className="row">
      <Box player={player} computer={computer} />
      <Box player={player} computer={computer} />
      <Box player={player} computer={computer} />
    </div>
  );
}

export default Row;