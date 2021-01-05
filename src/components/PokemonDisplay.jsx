import { useEffect, useState } from "react";

export default function PokemonDisplay({ pokemonUrl }) {
  let [pokemonData, setPokemonData] = useState({});
  console.log(pokemonData);

  useEffect(() => {
    let lastCalled = true;
    const fetchData = () => {
      if (typeof pokemonUrl === "string") {
        fetch(pokemonUrl)
          .then((response) => response.json())
          .then((data) => lastCalled && setPokemonData(data))
          .catch((e) => console.error(e));
      }
    };

    //setTimeout(fetchData, 10000 * Math.random());
    fetchData();
    return () => {
      lastCalled = false;
    };
  }, [pokemonUrl]);

  if (!pokemonData.id) {
    return <></>;
  }
  return (
    <>
      <div>id: {pokemonData.id}</div>
      <div>name: {pokemonData.name}</div>
      <img alt="pokemon figure" src={pokemonData.sprites?.front_default} />
    </>
  );
}
