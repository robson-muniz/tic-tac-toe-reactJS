import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false)

    const handleClick = () => {
        setIsEditing( (isEditing) => !isEditing)
      if (isEditing) {
        onChangeName(symbol, playerName);
      }
    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}