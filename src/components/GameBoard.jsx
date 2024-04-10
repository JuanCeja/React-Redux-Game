import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handlePlayerSelection = (rowIdx, colIdx) => {
        let updatedGameBoard = [...initialGameBoard];
        updatedGameBoard[rowIdx][colIdx] = "X";
        setGameBoard([...updatedGameBoard]);
    }


    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li>
                                <button onClick={() => handlePlayerSelection(rowIdx, colIdx)} key={colIdx}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard