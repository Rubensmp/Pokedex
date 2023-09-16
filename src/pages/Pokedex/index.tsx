import React, { useState, useEffect } from 'react';
import { getPokemonDetails, listPokemons } from '../../services/Pokemon';
import { PokemonDetail, PokemonListInterface } from '../../types/Pokemon';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

// import { Container } from './styles';

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  function handlePokemonClick(pokemon: PokemonDetail) {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        Pokemons:
        {pokemons.map((pokemon) => (
          <button key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon.name}, {pokemon.id}
          </button>
        ))}
      </div>
      <h2>Pokemon selecionado: {selectedPokemon?.name}</h2>
    </div>
  );
};

export default Pokedex;
