import { Container } from '@mui/material';
import React from 'react';
import './App.css';
import GameGrid from './components/GameGrid';

function App() {
  return <Container maxWidth="sm">
    <h1>Tic Tac Toe</h1>
    <GameGrid/>
  </Container>;
}

export default App;
