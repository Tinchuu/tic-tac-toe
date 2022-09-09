import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onSquareClick } from '../../services/gameLogicService';

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
        }

    }
});


export const { onMove } = gameSlice.actions;

export default gameSlice.reducer;