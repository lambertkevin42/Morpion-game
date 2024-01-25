/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./player.css";

export default function Player({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing ) {
        playerName = <input type="text" requiered />       
    }

    return(
        <li className="player">
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Editer</button>
        </li>
    );
}
