import { Grid } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { onMove } from "../store/slices/gameSlice";
import PlayerDisplay from "./PlayerDisplay";
import Square from "./Square";

const GameGrid = () => {
    return(
        <div>
            <PlayerDisplay display={1} />

            <Grid container spacing={1} direction="column">
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={1}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


export default GameGrid;