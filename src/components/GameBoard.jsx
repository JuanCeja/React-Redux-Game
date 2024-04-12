
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectSquare, turns }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectSquare = (rowIdx, colIdx) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li key={colIdx}>
                                <button onClick={() => onSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard