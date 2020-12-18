import { useEffect } from "react";

export default function Exemple({ setApiData }) {

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then((response) => response.json())
            .then((data) => setApiData(data['results']))
    }, [setApiData])
 
    return (
        <div>
           Ceci est un hook de récupération
        </div>
    )
}