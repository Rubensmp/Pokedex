import React, { useState } from 'react';
import { getPokemonDetails, listPokemons } from '../../services/Pokemon';
import { PokemonDetail } from '../../types/Pokemon';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

// import { Container } from './styles';

const Pokedex: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const { isLoading, data } = useQuery({
    queryKey: ['listPokemons', page],
    queryFn: () => listPokemons(page),
    keepPreviousData: true,
  });

  const search = useQuery(`getPokemonDetails_${filter}`, () =>
    getPokemonDetails(filter)
  );

  function handlePokemonClick(pokemon: PokemonDetail) {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>Pokedex</h1>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={() => setFilter(input)}>Pesquisar</button>
          <button onClick={() => setFilter('')}>Apagar</button>
          <div>
            Pokemons:
            {filter !== '' ? (
              <div>{JSON.stringify(search.data, undefined, 2)}</div>
            ) : (
              <>
                {data?.results.map((pokemon: PokemonDetail) => (
                  <button
                    key={pokemon.id}
                    onClick={() => handlePokemonClick(pokemon)}
                  >
                    {pokemon.name}, {pokemon.id}
                  </button>
                ))}
              </>
            )}
          </div>

          <div>
            <button
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              disabled={page === 0}
            >
              Anterior
            </button>

            <button
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page >= 1281 / 20}
            >
              próximo
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Pokedex;
