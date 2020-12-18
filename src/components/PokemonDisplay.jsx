import { useEffect, useState } from "react"

export default function PokemonDisplay({ pokemonUrl }) {
  let [pokemonData, setPokemonData] = useState({})
  console.log(pokemonData)

  useEffect(() => {
    let isCanceled = false;
    const fetchData = () => {
      if (typeof pokemonUrl === "string") {
        fetch(pokemonUrl)
          .then((response) => response.json())
          .then((data) => !isCanceled && setPokemonData(data))
          .catch((e) => console.error(e))
      }
    };
    setTimeout(fetchData,  Math.random() * Math.floor(5000))
    return () => {
      isCanceled = true;
    }
  }, [pokemonUrl])

  if (!pokemonData.id) {
    return (<></>)
  }
  return (<>
    <div>id: {pokemonData.id}</div>
    <img alt="pokemon figure" src={pokemonData.sprites?.front_default} />
  </>)
}