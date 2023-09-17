import pokeball from '../../assets/pokeball.png'
import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  padding: 1.5rem;
  background: #FFF;
  min-width: 210px;
  position: relative;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
  overflow: hidden;
  cursor: pointer;
`;

export const Content = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  z-index: 100;
`

export const Id = styled.p`
  align-self: flex-end;
  font-size: 12px;
  color: #A3A3A3;
`

export const Sprite = styled.img`
  align-self: center;
  width: 120px;
`

export const Name = styled.p`
  text-transform: capitalize;
  align-self: center;
  font-weight: 500;
`

export const Overlay = styled.div`
  position: absolute;
  background: blue;
  flex:1;
  top: 120%;
  left: 50%;
  height: 120%;
  width: 120%;
  border-radius: 90px;
  background: #1A1A1A;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-size: 50%, 50%, contain;
  background-position: 100% 10%;
  opacity: 0.3;
  transform: translate(-50%, -50%);
`
