import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FavouritesPage from './components/FavouritePage';
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./contexts/PokemonContext";

function App() {
  return (
    <main className="App">
      <PokemonProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/favourite' element={<FavouritesPage />} />
        </Routes>
      </PokemonProvider>
    </main>
  );
}

export default App;
