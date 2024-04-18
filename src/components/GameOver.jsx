import React from 'react'

const GameOver = ({ winner }) => {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {
                winner ? <p>{winner} has won!</p>
                    : <p>It's have a draw!</p>
            }
            <p><button>Rematch!</button></p>
        </div>
    )
}

export default GameOver