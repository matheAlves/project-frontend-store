import React from 'react';
// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

class ShoppingCart extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        <Header />
        { cartItems.length === 0
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
          : (
            cartItems.map((item, index) => (
              <div key={ index } data-testid="shopping-cart-product-name">
                <h3>{ item.title }</h3>
                <img src={ item.thumbnail } alt={ item.title } />
                <p>{ item.price }</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
              </div>
            ))
          ) }
        <Footer />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default ShoppingCart;
