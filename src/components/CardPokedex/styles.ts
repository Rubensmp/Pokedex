import pokeball from '../../assets/pokeball.png'
import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  width: 210px;
  padding: 1.5rem;
  cursor: pointer;
  background: #FFF;
  min-width: 210px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.75);
`;

export const Content = styled.div`
  z-index: 100;
  display: flex;
  position: relative;
  flex-direction: column;
`

export const Id = styled.p`
  color: #A3A3A3;
  font-size: 12px;
  align-self: flex-end;
`

export const Sprite = styled.img`
  width: 120px;
  align-self: center;
`

export const Name = styled.p`
  font-weight: 500;
  align-self: center;
  text-transform: capitalize;
`

export const Overlay = styled.div`
  flex:1;
  top: 120%;
  left: 50%;
  width: 120%;
  opacity: 0.3;
  height: 120%;
  background: blue;
  position: absolute;
  border-radius: 90px;
  background: #1A1A1A;
  background-repeat: no-repeat;
  background-position: 100% 10%;
  transform: translate(-50%, -50%);
  background-size: 50%, 50%, contain;
  background-image: url(${pokeball});
`
