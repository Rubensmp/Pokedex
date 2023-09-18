import React from 'react';

import { Container, Id, Sprite, Name, Overlay, Content } from './styles';
import { PokemonDetail } from '../../types/Pokemon';
import { useNavigate } from 'react-router-dom';

interface CardPokedexProps {
  data: PokemonDetail;
}

const CardPokedex: React.FC<CardPokedexProps> = ({ data }) => {
  const navigate = useNavigate();

  function handlePokemonClick() {
    navigate(`/pokemon/${data.name}`);
  }

  return (
    <Container onClick={() => handlePokemonClick()}>
      <Content>
        <Id>{`# ${data.id}`}</Id>
        <Sprite
          src={data?.sprites.other?.['official-artwork'].front_default}
          alt='Pokemon front'
        />
        <Name>{data.name}</Name>
      </Content>
      <Overlay />
    </Container>
  );
};

export default CardPokedex;
