import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

import Image from '../images/cart.png';
import ImageBack from '../images/voltar.png';

class Header extends React.Component {
  render() {
    const {
      handleChange,
      handleClick,
    } = this.props;
    return (
      <header className="header">

        <Link to="/" className="linkvoltar">
          <img className="voltar" src={ ImageBack } alt="voltar" />
        </Link>

        <div className="center">

          <h1 className="titulo">Front Online Store</h1>
          <div className="inputSearch">
            <input
              className="input"
              data-testid="query-input"
              type="text"
              id="input-search"
              name="search"
              placeholder="Digite algum termo de pesquisa"
              onChange={ handleChange }
            />
            <button
              className="button"
              type="button"
              data-testid="query-button"
              onClick={ handleClick }
            >
              Buscar
            </button>
          </div>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>

        <Link className="linkCart" to="/cart" data-testid="shopping-cart-button">
          <img className="image-cart" src={ Image } alt="carrinho de compras" />
        </Link>

      </header>
    );
  }
}

Header.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default Header;
