import React from 'react';
import './App.css';
import Form from './components/Form';
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <PokemonAxios />
    </div>
  );
}

export default App;
