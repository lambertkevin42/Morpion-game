import "./player.css";

function Player() {
    return(
        <ol id="players">
            <li>
                <span className="player-name">Player 1</span>
                <span className="player-symbol">X</span>
            </li>
            <li>
                <span className="player-name">Player 2</span>
                <span className="player-symbol">O</span>
            </li>
        </ol>
    );
}

export default Player