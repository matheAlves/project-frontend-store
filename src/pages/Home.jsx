import React from 'react';

import { Link } from 'react-router-dom';

import Image from '../images/shoppingcart.jpg';
import Categories from './Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input
          type="text"
          id="input-search"
          placeholder="Pesquisar"
        />
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ Image } alt="carrinho de compras" />
        </Link>

        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Home;
