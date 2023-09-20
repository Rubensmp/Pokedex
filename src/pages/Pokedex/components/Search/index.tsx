import React from 'react';
import { useQuery } from 'react-query';
import { getPokemonDetails } from '../../../../services/Pokemon';
import { CardPokedex } from '../../../../components';
import { Center, CircularProgress } from '@chakra-ui/react';

interface SearchProps {
  filter: string;
}

const Search: React.FC<SearchProps> = ({ filter }) => {
  const { data, isLoading } = useQuery(`getPokemonDetails_${filter}`, () =>
    getPokemonDetails(filter)
  );

  if (isLoading) {
    return (
      <Center mt={20}>
        <CircularProgress isIndeterminate color={'#FFF'} />
      </Center>
    );
  }

  return (
    <>
      {data ? (
        <div style={{ marginTop: 20 }}>
          <CardPokedex data={data} />
        </div>
      ) : (
        <p style={{ marginTop: 20, color: '#FFF' }}>
          Não foi encontrado nenhum pokemon com esse nome ou identificação
        </p>
      )}
    </>
  );
};

export default Search;
