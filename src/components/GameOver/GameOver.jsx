/* eslint-disable react/prop-types */
export default function GameOver({ winner }) {
    return(
        <div id="game-over">
            <h2>Fin de partie !</h2>
            {winner && <p>{winner} gagne !</p>}
            {!winner && <p>Match nul !</p>}
            <p>
                <button>Revanche !</button>
            </p>
        </div>
    )
}