import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
