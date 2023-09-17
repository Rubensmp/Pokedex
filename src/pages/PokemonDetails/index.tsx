import React from 'react';
import { getPokemonDetails } from '../../services/Pokemon';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// import { Container } from './styles';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();

  const { data, isLoading } = useQuery(`getPokemonDetails_${name}`, () =>
    getPokemonDetails(name)
  );

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>{name}</h1>
          <img
            src={data?.sprites.other?.['official-artwork'].front_default}
            alt='Pokemon front'
          />
          <p>{JSON.stringify(data, undefined, 2)}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PokemonDetails;
