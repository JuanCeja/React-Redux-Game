
const Log = ({ turns }) => {
    

    return (
        <ol id="log">
            {turns.map(({player, square: {row, col}}) => (
                <li key={`${row}${col}`}>
                    <p>Player {player} selected {row},{col}</p>
                </li>
            ))}
        </ol>
    )
}

export default Log