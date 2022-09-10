import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onSquareClick } from '../../services/gameLogicService';
import { RootState } from '../rootStore';

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



export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        onMove: (state, action : PayloadAction<{x: number, y: number}>) => {
            state = onSquareClick(action.payload.x, action.payload.y, state)
        },
        startGame: (state) => {
            state= initialState;
        }

    }
});


export const { onMove, startGame } = gameSlice.actions;

export const selectState = (state: RootState) => state.game.tileState;
export const selectState2 = (state: RootState) => state.game.player;
export const selectIsOver = (state: RootState) => state.game.gameWon;

export default gameSlice.reducer;
