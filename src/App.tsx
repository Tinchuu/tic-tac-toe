import { Container } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import GameInstance from './components/GameInstance';
import gameSlice, { GameState } from './store/slices/gameSlice';

function App() {
  return <Container maxWidth="sm">
    <h1>Tic Tac Toe</h1>
    <GameInstance />
  </Container>;
}

export default App;
