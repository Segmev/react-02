import { useState } from 'react';
import './App.css';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonList from './components/PokemonList';
import PokemonTypeList from './components/PokemonTypeList';

function App() {
  let [selectedType, setSelectedType] = useState("");
  let [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <PokemonDisplay pokemonUrl={selectedPokemonUrl} />
        <PokemonTypeList setType={setSelectedType} />
        <PokemonList type={selectedType} setPokemonUrl={setSelectedPokemonUrl} />
      </header>
    </div>
  );
}

export default App;
