import "./App.css";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./contexts/PokemonContext";

function App() {
  return (
    <main className="App">
      <PokemonProvider>
        <Navbar />
        <PokemonList />
      </PokemonProvider>
    </main>
  );
}

export default App;
