import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Image from '../images/cart.png';
import ImageBack from '../images/voltar.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2 className="titulo">Front Online Store</h2>
        <div className="links">
          <Link to="/" className="linkvoltar">
            <img className="voltar" src={ ImageBack } alt="voltar" />
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img className="image-cart" src={ Image } alt="carrinho de compras" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
