import { Grid } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { GameState, onMove } from "../store/slices/gameSlice";
import GridRow from "./GridRow";
import PlayerDisplay from "./PlayerDisplay";
import Square from "./Square";

export interface Value {
    player: number,
    tileState: number[][]
}

const GameGrid = ({player, tileState}: Value) => {
    let dispatch = useAppDispatch();
    return(
        <div>
            <PlayerDisplay display={player} />
            <Grid container spacing={1} direction="column">
                <GridRow x={0} tileState={tileState}/>
                <GridRow x={1} tileState={tileState}/>
                <GridRow x={2} tileState={tileState}/>
            </Grid>
        </div>
    )
}


export default GameGrid;