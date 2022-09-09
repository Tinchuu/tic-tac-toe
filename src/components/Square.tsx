export interface Value {
        display: number,
}
    

const Square = ({display}: Value) : JSX.Element => {
        return <div style={{display: 'grid', placeContent: 'center', aspectRatio: '1', borderRadius: 4, backgroundColor: "gray"}}>
                <h1>{display == 0 ? "" : display == 1 ? "X" : "O"}</h1>
        </div>
}

export default Square;