
const Log = ({ turns }) => {
    

    return (
        <ol id="log">
            {turns.map(({player, square: {row, col}}) => (
                <li>
                    <p>Player {player} choose square {row}, {col}</p>
                </li>
            ))}
        </ol>
    )
}

export default Log