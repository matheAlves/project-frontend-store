import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Categories from './Categories';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    const {
      listProduct,
      loading,
      handleChange,
      handleClick,
      addToCart,
    } = this.props;
    return (
      <div>
        <Header />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input
          data-testid="query-input"
          type="text"
          id="input-search"
          name="search"
          placeholder="Pesquisar"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Buscar
        </button>
        <div>
          <Categories handleChange={ handleChange } />
        </div>
        { loading
          ? <p>teste</p>
          : <ProductList products={ listProduct } addToCart={ addToCart } />}
      </div> // passa o valor do listProduct ao products e joga no ProductList
    );
  }
}

Home.propTypes = {
  listProduct: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    })),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
