import { useState, useEffect, React } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { Container, PokeDex, Infos } from "./components/Styles/App-style";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  const changePokeName = event => {
    setPokeName(event.target.value);
  };

  return (
    <Container>
      <PokeDex>
        <select onChange={changePokeName}>
          <option value={""}>Pokémon</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
          {pokeName ? <PokeCard pokemon={pokeName} /> : <Infos></Infos>}
      </PokeDex>
    </Container>
  );
}

export default App;
