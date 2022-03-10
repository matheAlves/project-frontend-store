import React from 'react';

import { Link } from 'react-router-dom';

import Image from '../images/shoppingcart.jpg';
import Categories from './Categories';
import ProductList from '../components/ProductList';

import * as Api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      listProduct: [],
      loading: true,
    };

    this.handlechangeSearch = this.handlechangeSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { searchText } = this.state;
    const selectedCategorieRequest = await Api
      .getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      listProduct: selectedCategorieRequest,
      loading: false,
    });
  }

  handlechangeSearch({ target }) {
    this.setState({ searchText: target.value });
  }

  render() {
    const { listProduct, loading } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input
          data-testid="query-input"
          type="text"
          id="input-search"
          placeholder="Pesquisar"
          onChange={ this.handlechangeSearch }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ Image } alt="carrinho de compras" />
        </Link>
        <div>
          <Categories />
        </div>
        {loading ? <p>teste</p> : <ProductList products={ listProduct } /> }
      </div>
    );
  }
}

export default Home;
