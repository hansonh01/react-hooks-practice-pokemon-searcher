import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeDex, setPokeDex] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then(r=>r.json())
      .then(setPokeDex);
  },[])

  const handleAddPokemon = (newPokemon) => setPokeDex([...pokeDex, newPokemon]);

  const filterPokeDex = pokeDex.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        onAdd={handleAddPokemon}
      />
      <br />
      <Search
        search={search}
        onSearch={setSearch}
      />
      <br />
      <PokemonCollection
        pokeDex={filterPokeDex}
      />
    </Container>
  );
}

export default PokemonPage;
