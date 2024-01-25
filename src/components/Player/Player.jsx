/* eslint-disable react/prop-types */
import "./player.css";

function Player({ name, symbol }) {
    return(
        <li>
            <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button>Editer</button>
        </li>
    );
}

export default Player