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
      search: '',
      listProduct: [],
      loading: true,
    };

    this.handlechangeSearch = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { search } = this.state;
    const resultSearch = await Api
      .getProductsFromCategoryAndQuery('', search);
    this.setState({
      listProduct: resultSearch,
      loading: false,
    });
  }

  handleChange({ target }) {
    this.setState({ search: target.value }); // target é o que causa o evento do change.
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
          onChange={ this.handleChange }
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
      </div> // passa o valor do listProduct ao products e joga no ProductList
    );
  }
}

export default Home;
