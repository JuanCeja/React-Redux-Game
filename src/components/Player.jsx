import { useState } from "react";

const Player = ({ name, symbol }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState({name});

    const handleEditClick = () => {
        setIsEditing(prevState => !prevState);
    }

    return (
        <li>
            <span className="player">
                {isEditing
                    ? <input type="text" placeholder={name}/>
                    : <span className="player-name">{name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player