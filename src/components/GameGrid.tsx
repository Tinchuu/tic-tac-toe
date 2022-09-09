import { Button, Grid, Paper } from "@mui/material";
import { useState } from "react";
import PlayerDisplay from "./PlayerDisplay";
import Square from "./Square";

const [tileState, setTiles] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

export interface GameState {
    tileState: number[][];
    gameWon: boolean;
    player: number;
}

const initialState : GameState = {
    tileState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    gameWon: false,
    player: 1
}

export const isGameOver = (state: GameState) : boolean => {
    return (Math.abs(state.tileState[0][0] + state.tileState[0][1] + state.tileState[0][2]) == 3) ||
    (Math.abs(state.tileState[1][0] + state.tileState[1][1] + state.tileState[1][2]) == 3) ||
    (Math.abs(state.tileState[2][0] + state.tileState[2][1] + state.tileState[2][2]) == 3) ||
    (Math.abs(state.tileState[0][0] + state.tileState[1][0] + state.tileState[2][0]) == 3) ||
    (Math.abs(state.tileState[0][1] + state.tileState[1][1] + state.tileState[2][1]) == 3) ||
    (Math.abs(state.tileState[0][2] + state.tileState[1][2] + state.tileState[2][2]) == 3) ||
    (Math.abs(state.tileState[0][0] + state.tileState[1][1] + state.tileState[2][2]) == 3) ||
    (Math.abs(state.tileState[0][2] + state.tileState[1][1] + state.tileState[2][0]) == 3)
    ;
}

function changeState(x:number, y:number, currentState:GameState) : GameState {
    currentState.tileState[x][y] = currentState.player;
    return currentState;
}

const GameGrid = () => {
    let currentState = initialState;
    return(
        <div>
            <PlayerDisplay display={currentState.player} />

            <Grid container spacing={1} direction="column">
                <Grid item spacing={1} container>
                    <Grid onClick = {() => changeState(0,0,currentState)}item xs={2}>
                        <Square display={currentState.tileState[0][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[0][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[0][2]}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[1][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[1][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[1][2]}/>
                    </Grid>
                </Grid>
                <Grid item spacing={1} container>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[2][0]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[2][1]}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Square display={currentState.tileState[2][2]}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}




export default GameGrid;