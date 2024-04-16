
const Log = ({ turns }) => {
    

    return (
        <ol id="log">
            {turns.map(turn => (
                <li>
                    <p>Player {turn.player} choose square {turn.square.row}, {turn.square.col}</p>
                </li>
            ))}
        </ol>
    )
}

export default Log