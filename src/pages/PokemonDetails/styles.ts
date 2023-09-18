import styled from 'styled-components';
import typeColors from '../../utils/typeColors';

interface Props {
  type: string | undefined;
}

export const TypeLabel = styled.div<Props>`
  color: white;
  background: ${({type}) => typeColors(type)};
`;

export const DescriptionTitle = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
`

export const DescriptionText = styled.p`
  text-transform: capitalize;
`

export const StatusText = styled.p`
    font-size: 12px;
    margin-right: 5px;
    min-width: 20px;
    text-align: end;
`
