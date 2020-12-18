import { useEffect, useState } from "react";

export default function PokemonTypeList({ setType }) {
  let [types, setTypes] = useState([]);
  let [selectedValue, setSelectedValue] = useState("normal");

  useEffect(() => {
    const fetchTypes = () => { 
      fetch("https://pokeapi.co/api/v2/type")
        .then((response) => response.json())
        .then((data) => setTypes(data["results"]));
    }
    fetchTypes();
  }, []);

  const handleSelection = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <button onClick={() => setType(selectedValue)} >Valider le type</button>
      <select value={selectedValue} onChange={handleSelection}>
        {types.map(({name}) => <option key={`pokemon-type-${name}`} value={name}>{name}</option>)}
      </select>
    </>
  )
}