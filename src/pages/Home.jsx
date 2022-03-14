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
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    if (target.type === 'radio') {
      this.setState({
        category: target.id,
      }, () => this.handleClick());
    } else if (target.type === 'text') {
      this.setState({
        search: target.value,
      });
    }
  }

  // requisito 6 - função modificada para receber o parametro da categoria também. Também é chamada ao selecionar uma categoria (através de handleChange)
  async handleClick() {
    const { search, category } = this.state;
    const resultSearch = await Api
      .getProductsFromCategoryAndQuery(category, search);
    this.setState({
      listProduct: resultSearch,
      loading: false,
    });
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
          name="search"
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
          <Categories handleChange={ this.handleChange } />
        </div>
        {loading ? <p>teste</p> : <ProductList products={ listProduct } /> }
      </div> // passa o valor do listProduct ao products e joga no ProductList
    );
  }
}

export default Home;
