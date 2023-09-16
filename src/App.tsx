import React from 'react';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ChakraProvider } from '@chakra-ui/react';
// import { Container } from './styles';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
