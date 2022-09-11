import { Meta } from "@storybook/react"
import { Provider } from "react-redux";
import GameGrid from "../components/GameGrid";
import store from "../store/rootStore";
import { GameState } from "../store/slices/gameSlice";

const initialState : GameState = {
    tileState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    gameWon: false,
    player: 1
}


const meta: Meta = {
    title: '',
    component: GameGrid 
}

export default meta;

export const Default = () => <Provider store={store}><GameGrid player={initialState.player} tileState={initialState.tileState}/></Provider>