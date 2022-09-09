import { GameState } from "../store/slices/gameSlice";

export const onSquareClick = (x:number, y:number, state: GameState) : GameState => {
  let newState = state;
  if (state.tileState[x][y] == 0) {
    newState.tileState[x][y] = state.player;
    newState.player = state.player == 1 ? -1 : 1;
  }
  return newState;
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