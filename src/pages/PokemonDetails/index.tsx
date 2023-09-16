import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../../services/Pokemon';
import { PokemonDetail } from '../../types/Pokemon';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name).then((response) =>
      setSelectedPokemonDetails(response)
    );
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={selectedPokemonDetails?.sprites.front_default}
        alt='Pokemon front'
      />
      <p>{JSON.stringify(selectedPokemonDetails, undefined, 2)}</p>
    </div>
  );
};

export default PokemonDetails;
