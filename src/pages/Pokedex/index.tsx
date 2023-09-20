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
  Center,
  CircularProgress,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { CardPokedex, Cookies } from '../../components';
import { Search } from './components';
import { InView } from 'react-intersection-observer';
import { useCookies } from 'react-cookie';

const Pokedex: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [filter, setFilter] = useState<string>('');

  const { isFetching, isLoading, isFetched } = useQuery({
    queryKey: ['listPokemons', page],
    queryFn: () => listPokemons(page),
    keepPreviousData: true,
    onSuccess: (data) => setPokemons([...pokemons, ...data.results]),
  });

  const isSearching = filter !== '';

  const [cookies, setCookie] = useCookies(['cookieConsent']);

  return (
    <>
      {!cookies.cookieConsent && <Cookies />}

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
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                  borderRadius='20'
                  bg='#FFF'
                  focusBorderColor='#b20320'
                />
                <InputRightElement width='6rem' justifyContent={'flex-end'}>
                  {filter !== '' && (
                    <Button
                      h='1.75rem'
                      size='sm'
                      mr={1}
                      onClick={() => {
                        setFilter('');
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
                onClick={() => setFilter(filter)}
                borderRadius={'20'}
              >
                #
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
                  {pokemons.map((pokemon: PokemonDetail) => (
                    <CardPokedex key={pokemon.id} data={pokemon} />
                  ))}
                </Flex>

                {(isFetching || isLoading) && (
                  <Center p={10}>
                    <CircularProgress isIndeterminate color='#FFF' />
                  </Center>
                )}

                {(isFetched || !isLoading) && (
                  <InView
                    as='div'
                    onChange={() => setPage(page + 1)}
                    delay={500}
                  >
                    <div style={{ height: 20, width: 20 }}></div>
                  </InView>
                )}
              </>
            )}
          </div>
        </Container>
      </Flex>
    </>
  );
};

export default Pokedex;
