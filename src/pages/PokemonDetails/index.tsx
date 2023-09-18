import React from 'react';
import { getPokemonDetails } from '../../services/Pokemon';

import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Ability, Stat, Type } from '../../types/Pokemon';

import {
  IconButton,
  Flex,
  Heading,
  Box,
  Image,
  Center,
  VStack,
  StackDivider,
  HStack,
  Icon,
  Progress,
  Container,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import typeColors from '../../utils/typeColors';
import { LiaRulerVerticalSolid, LiaWeightHangingSolid } from 'react-icons/lia';
import { DescriptionText, DescriptionTitle, StatusText } from './styles';
import formatStats from '../../utils/formatStats';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(`getPokemonDetails_${name}`, () =>
    getPokemonDetails(name)
  );

  const primaryColor = typeColors(data?.types[0].type.name);
  const height = data && data?.height / 10;
  const weight = data && data?.weight / 10;

  return (
    <Flex
      bg={primaryColor}
      color='#FFF'
      flex={1}
      flexDirection='column'
      p='5px'
    >
      <Container maxW='container.sm' minH={'100vh'}>
        {!isLoading ? (
          <>
            <Flex
              alignItems='center'
              justifyContent='space-between'
              mb='40px'
              padding='0 5px'
            >
              <IconButton
                aria-label='Go back'
                icon={<ArrowBackIcon color='#FFF' />}
                bg='transparent'
                onClick={() => navigate(-1)}
                _hover={{ bg: 'transparent' }}
              />
              <Heading color='#FFF' style={{ textTransform: 'capitalize' }}>
                {name}
              </Heading>
              <h1>{`# ${data?.id}`}</h1>
            </Flex>
            <Center>
              <Box boxSize='xs' zIndex={10}>
                <Image
                  src={data?.sprites.other?.['official-artwork'].front_default}
                  alt='Pokemon front'
                />
              </Box>
            </Center>

            <VStack
              align='stretch'
              bg='#FFF'
              color='#333'
              marginTop='-150px'
              p='140px 5px 20px 5px'
              borderRadius='12px'
            >
              <Flex justifyContent='center' gap='10px'>
                {data?.types.map((type: Type) => (
                  <Box
                    bg={typeColors(type.type.name)}
                    key={type.slot}
                    padding='10px 30px'
                    borderRadius='25px'
                    color='#FFF'
                    textTransform='capitalize'
                    fontWeight='bold'
                  >
                    {type.type.name}
                  </Box>
                ))}
              </Flex>

              <Heading
                as='h4'
                size='md'
                color={primaryColor}
                textAlign='center'
                mt={10}
              >
                About
              </Heading>

              <HStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                justifyContent='center'
                color='#707070'
                alignItems='flex-end'
                mt={10}
              >
                <Flex alignItems='center' flexDirection='column' gap='10px'>
                  <Flex alignItems='center' gap='10px'>
                    <Icon as={LiaWeightHangingSolid} boxSize={30} />
                    <p>{weight} kg</p>
                  </Flex>
                  <DescriptionTitle>Weight</DescriptionTitle>
                </Flex>

                <Flex alignItems='center' flexDirection='column' gap='10px'>
                  <Flex alignItems='center' gap='20px'>
                    <Icon as={LiaRulerVerticalSolid} boxSize={30} />
                    <p>{height} m</p>
                  </Flex>
                  <DescriptionTitle>Height</DescriptionTitle>
                </Flex>

                <Flex alignItems='center' flexDirection='column'>
                  {data?.abilities.map((ability: Ability) => {
                    return (
                      <DescriptionText key={ability.slot}>
                        {ability.ability.name.replace('-', ' ')}
                      </DescriptionText>
                    );
                  })}
                  <DescriptionTitle>Moves</DescriptionTitle>
                </Flex>
              </HStack>

              <Heading
                as='h4'
                size='md'
                color={primaryColor}
                textAlign='center'
                mt={10}
              >
                Base Stats
              </Heading>
              <HStack
                divider={<StackDivider borderColor='gray.200' />}
                padding='0 10px'
                flex={1}
                alignItems='center'
              >
                <Flex flexDirection='column'>
                  {data?.stats.map((stat: Stat) => {
                    return (
                      <StatusText>{formatStats(stat.stat.name)}</StatusText>
                    );
                  })}
                </Flex>

                <Flex
                  flexDirection='column'
                  flex={1}
                  justifyContent={'space-between'}
                >
                  {data?.stats.map((stat: Stat) => {
                    return (
                      <Flex alignItems='center'>
                        <StatusText>{stat.base_stat}</StatusText>
                        <Progress
                          value={stat.base_stat}
                          max={255}
                          borderRadius='20px'
                          size='xs'
                          width={'100%'}
                        />
                      </Flex>
                    );
                  })}
                </Flex>
              </HStack>
            </VStack>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </Flex>
  );
};

export default PokemonDetails;
