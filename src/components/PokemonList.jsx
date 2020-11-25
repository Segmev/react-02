import { useEffect, useState } from "react"

function PokemonListElement({ pokemon = {}, setPokemonUrl }) {
  const {
    name,
    url
  } = pokemon;

  return (
    <li>
      <button onClick={() => setPokemonUrl(url)}>{name}</button>
    </li>
  );
}

export default function PokemonList({ type, setPokemonUrl }) {
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((response) => response.json())
        .then((data) => setPokemons(data["pokemon"]))
        .catch((e) => console.error(e))
    }

    fetchData();
  }, [type])

  return (
    <ul>
      {pokemons?.map(({ pokemon }) => <PokemonListElement
        type="button"
        key={`pokemon-${pokemon.name}`}
        pokemon={pokemon}
        setPokemonUrl={setPokemonUrl}
      />)}
    </ul>
  )
}