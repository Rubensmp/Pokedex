import React from 'react';

import * as Pages from './pages';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Pages.Pokedex />} />
        <Route path='/pokemon/:name' element={<Pages.PokemonDetails />} />
      </Switch>
    </Router>
  );
};

export default Routes;
