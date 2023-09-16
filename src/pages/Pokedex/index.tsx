import React from 'react';
import { listPokemons } from '../../services/Pokemon';
import { PokemonDetail } from '../../types/Pokemon';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

// import { Container } from './styles';

const Pokedex: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(`listPokemons`, listPokemons);

  function handlePokemonClick(pokemon: PokemonDetail) {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>Pokedex</h1>
          <div>
            Pokemons:
            {data?.results.map((pokemon) => (
              <button
                key={pokemon.id}
                onClick={() => handlePokemonClick(pokemon)}
              >
                {pokemon.name}, {pokemon.id}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Pokedex;
