const Instructions = ({ player, setPlayer, computer, setComputer }) => {

  const handleClick = (e) => {
    const newPlayerChar = { ...player, char: e.target.value };
    setPlayer(newPlayerChar);

    if (e.target.value === "X") {
      const newCompChar = { ...computer, char: "O" }
      setComputer(newCompChar);
    } else {
      const newCompChar = { ...computer, char: "X" }
      setComputer(newCompChar);
    }
  }

  if (!player.char) {
    return (
      <div className="instructions">
        <h2>Which Player Are You?</h2>
        <div className="choice">
          <button onClick={handleClick} value="X">X</button>
          <h4>or</h4>
          <button onClick={handleClick} value="O">O</button>
        </div>
      </div>
    );
  } else if (player.isTurn) {
    return (
      <div className="instructions">
        <h2>It's Your Turn</h2>
      </div>
    );
  } else {
    return (
      <div className="instructions">
        <h2>It's the Computer's Turn</h2>
      </div>
    );
  }
}

export default Instructions;