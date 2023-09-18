import React from 'react';
import { useQuery } from 'react-query';
import { getPokemonDetails } from '../../../../services/Pokemon';
import { CardPokedex } from '../../../../components';

interface SearchProps {
  filter: string;
}

const Search: React.FC<SearchProps> = ({ filter }) => {
  const { data } = useQuery(`getPokemonDetails_${filter}`, () =>
    getPokemonDetails(filter)
  );

  return (
    <div style={{ width: 210, marginTop: 20 }}>
      {data ? <CardPokedex data={data} /> : <div></div>}
    </div>
  );
};

export default Search;
