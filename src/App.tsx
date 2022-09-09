import { Container } from '@mui/material';
import './App.css';
import GameGrid from './components/GameGrid';
import GameInstance from './components/GameInstance';
import { GameState } from './store/slices/gameSlice';

// const initialState : GameState = {
//   tileState: [
//       [0, 0, 0],
//       [0, 0, 0],
//       [0, 0, 0]
//   ],
//   gameWon: false,
//   player: 1
// }


function App() {
  return <Container maxWidth="sm">
    <h1>Tic Tac Toe</h1>
    <GameInstance />
  </Container>;
}

export default App;
