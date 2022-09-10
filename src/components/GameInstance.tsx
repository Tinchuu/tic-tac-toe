import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GameState, onMove, selectIsOver, selectState, selectState2, startGame } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";

const initialState : GameState = {
    tileState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    gameWon: false,
    player: 1
}


const GameInstance = () : JSX.Element => {
        const tileState = useAppSelector(selectState);
        const player = useAppSelector(selectState2);
        const isGameOver = useAppSelector(selectIsOver);
        const dispatch = useAppDispatch();
    

        // useEffect(() => {
        //     dispatch(startGame())
        // }, [dispatch]);


        // usually uses tileState values
        return <GameGrid player={initialState.player} tileState={initialState.tileState}/>

 }


export default GameInstance;