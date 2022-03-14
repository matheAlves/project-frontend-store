import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cartList } = this.props;

    return (
      <div>
        { cartList.length === 0
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
          : (
            cartList.map((item) => {
              <div data-testid="shopping-cart-product-name">
                <img src={ item.thumbnail } alt={ item.title } />
                <h3>{ item.title }</h3>
                <p>{ item.price }</p>
              </div>
            })
          ) }
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
