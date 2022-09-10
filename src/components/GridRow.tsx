import { Grid } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { GameState, onMove } from "../store/slices/gameSlice";
import PlayerDisplay from "./PlayerDisplay";
import Square from "./Square";

export interface Value {
    x: number,
    tileState: number[][]
}

const GridRow = ({x, tileState}: Value) => {
    let dispatch = useAppDispatch();
    return(
        <Grid item spacing={1} container>
            <Grid onClick = {() => dispatch(onMove({x:x, y:0}))} item xs={2}>
                <Square display={tileState[x][0]}/>
            </Grid>
            <Grid onClick = {() => dispatch(onMove({x:x, y:1}))}  item xs={2}>
                <Square display={tileState[x][1]}/>
            </Grid>
            <Grid onClick = {() => dispatch(onMove({x:x, y:2}))}  item xs={2}>
                <Square display={tileState[x][2]}/>
            </Grid>
        </Grid>
    )
}


export default GridRow;