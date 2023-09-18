import React, { useState } from 'react';
import { listPokemons } from '../../services/Pokemon';
import { PokemonDetail } from '../../types/Pokemon';
import { useQuery } from 'react-query';
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Container,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { SmallCloseIcon, SearchIcon } from '@chakra-ui/icons';
import { CardPokedex } from '../../components';
import { Search } from './components';

const Pokedex: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const { data } = useQuery({
    queryKey: ['listPokemons', page],
    queryFn: () => listPokemons(page),
    keepPreviousData: true,
  });

  const isSearching = filter !== '';

  return (
    <Flex bg={'#dc0a2d'} padding='0 10px' minH='100vh'>
      <Container maxW='container.lg'>
        <div>
          <Heading color='#FFF' padding='20px 0'>
            Pokedex
          </Heading>
          <Flex justifyContent='flex-start'>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                placeholder='Procurar'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                borderRadius='20'
                bg='#FFF'
                focusBorderColor='#b20320'
              />
              <InputRightElement width='6rem' justifyContent={'flex-end'}>
                {input !== '' && (
                  <Button
                    h='1.75rem'
                    size='sm'
                    mr={1}
                    onClick={() => {
                      setFilter('');
                      setInput('');
                    }}
                    borderRadius={'20'}
                  >
                    <SmallCloseIcon />
                  </Button>
                )}
              </InputRightElement>
            </InputGroup>
            <Button
              ml={2}
              size='md'
              onClick={() => setFilter(input)}
              borderRadius={'20'}
            >
              <SearchIcon />
            </Button>
          </Flex>

          {isSearching ? (
            <Search filter={filter} />
          ) : (
            <>
              <Flex
                wrap='wrap'
                justifyContent='center'
                gap='10px'
                margin='20px 0'
              >
                {data?.results.map((pokemon: PokemonDetail) => (
                  <CardPokedex key={pokemon.id} data={pokemon} />
                ))}
              </Flex>
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
                  disabled={page === Math.ceil(1281 / 20)}
                >
                  próximo
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </Flex>
  );
};

export default Pokedex;
