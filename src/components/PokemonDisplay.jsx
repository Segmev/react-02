import { useEffect, useState } from "react"

export default function PokemonDisplay({ pokemonUrl }) {
  let [pokemonData, setPokemonData] = useState({})
  console.log(pokemonData)

  useEffect(() => {
    const fetchData = () => {
      if (typeof pokemonUrl === "string") {
        fetch(pokemonUrl)
          .then((response) => response.json())
          .then((data) => setPokemonData(data))
          .catch((e) => console.error(e))
      }
    };

    fetchData();
  }, [pokemonUrl])

  if (!pokemonData.id) {
    return (<></>)
  }
  return (<>
    <div>id: {pokemonData.id}</div>
    <img alt="pokemon figure" src={pokemonData.sprites?.back_default} />
  </>)
}