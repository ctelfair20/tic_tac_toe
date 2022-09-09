const Box = ({ id, player, computer, setPlayer, board, setBoard }) => {

  const handleClick = (e) => {
    // ensure the state of the board is up-to-date
    setBoard({ ...board, [id]: player.char });
    // lets the computer know when to take its turn
    setPlayer({ ...player, isTurn: !player.isTurn });
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{board[id]}</span>
    </div>
  );
}

export default Box;