import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  console.log('activePlayer =',activePlayer);

  const handleSelectSquare = (rowIdx, colIdx) => {
    setGameTurns(prevTurns => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") currentPlayer = "O";

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"} />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App



// npm run dev