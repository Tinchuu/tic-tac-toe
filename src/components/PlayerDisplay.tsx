export interface Value {
    display: number,
}

const PlayerDisplay = ({display}: Value) : JSX.Element => {
    return <div style={{placeContent: 'center', borderRadius: 4}}>
            <h1>Player {display == 1 ? 1 : 2}</h1>
    </div>
}

export default PlayerDisplay;