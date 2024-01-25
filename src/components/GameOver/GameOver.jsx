/* eslint-disable react/prop-types */
import "./gameover.css";

export default function GameOver({ winner, onRestart }) {
    return(
        <div id="game-over">
            <h2>Fin de partie !</h2>
            {winner && <p>{winner} gagne !</p>}
            {!winner && <p>Match nul !</p>}
            <p>
                <button onClick={onRestart}>Revanche !</button>
            </p>
        </div>
    )
}