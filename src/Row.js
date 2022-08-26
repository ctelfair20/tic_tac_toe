import Box from './Box';

const Row = ({ player, computer }) => {
  return (
    <div className="row">
      <Box player={player} computer={computer} />
      <Box />
      <Box />
    </div>
  );
}

export default Row;