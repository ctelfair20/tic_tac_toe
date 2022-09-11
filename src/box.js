const Box = ({ id, player, computer, setPlayer, board, setBoard, setWinnerOptionsWrapper, setWinnerOptions, isOver }) => {

  const handleClick = (e) => {
    // check if it is the player's trun
    if (player.isTurn && player.char != null) {
      // ensure the state of the board is up-to-date
      setBoard({ ...board, [id]: player.char });
      setWinnerOptionsWrapper(id, player.char);
      // lets the computer know when to take its turn
      if (!isOver) {
        setPlayer({ ...player, isTurn: !player.isTurn });
      }
    } else {
      console.log("not your turn");
    }
  }

  return (
    <div className="box" onClick={handleClick}>
      <span className="filled">{board[id]}</span>
    </div>
  );
}

export default Box;