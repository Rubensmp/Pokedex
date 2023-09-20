import { Button, Container, Flex, Slide } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';

export default function Cookies() {
  const [cookies, setCookie] = useCookies(['cookieConsent']);

  const giveCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' });
  };

  return (
    <Slide
      direction='bottom'
      in={!cookies.cookieConsent}
      style={{ zIndex: 1000, background: '#FFF' }}
    >
      <Flex flexDirection='column' paddingY='20px'>
        <Container maxW='container.lg'>
          <p>
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
          <Flex flex={1} justifyContent={'space-between'} mt='30px'>
            <Button>Saiba mais</Button>
            <Flex gap={'20px'}>
              <Button onClick={giveCookieConsent}>Aceitar</Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Slide>
  );
}
