import { useState } from "react";

const Player = ({ initialName, symbol, isActive, handlePlayerNameChange }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
        let currentPlayerName = playerName;
        handlePlayersName(symbol, currentPlayerName);
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player