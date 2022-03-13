import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCart } />
        <Route exact path="/:id" component={ Details } />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
