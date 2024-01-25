import { useState } from "react"
import GameBoard from "./components/Gameboard/GameBoard"
import Player from "./components/Player/Player"
import Log from "./components/Log/Log";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard (gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
      const { square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);



  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialName={PLAYERS.X} 
            symbol="X" 
            isActive={activePlayer === 'X'}
            
          />
          <Player 
            initialName={PLAYERS.O} 
            symbol="O" 
            isActive={activePlayer === 'O'}
            
          />
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
