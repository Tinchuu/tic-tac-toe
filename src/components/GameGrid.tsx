import { Grid } from "@mui/material";
import { GameState } from "../store/slices/gameSlice";
import PlayerDisplay from "./PlayerDisplay";
import Square from "./Square";

export interface Value {
    player: number,
    tileState: number[][]
}

const GameGrid = ({player, tileState}: Value) => {
    return(
        <div>
            <PlayerDisplay display={player} />

            <Grid container spacing={1} direction="column">
                <Grid item spacing={1} container>
                    <Grid id="1" item xs={2}>
                        <Square display={tileState[0][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[0][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[0][2]}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={tileState[1][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[1][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[1][2]}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={tileState[2][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[2][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={tileState[2][2]}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


export default GameGrid;