import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Details from '../pages/Details';

import * as Api from '../services/api';

class Pages extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      listProduct: {},
      loading: true,
      category: '',
      cartItems: [],
    };
  }

  handleChange = ({ target }) => {
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

  // requisito 6 - função modificada para receber o parametro da categoria também. Também é chamada ao selecionar uma categoria
  handleClick = async () => {
    const { search, category } = this.state;
    const resultSearch = await Api
      .getProductsFromCategoryAndQuery(category, search);
    this.setState({
      listProduct: resultSearch,
      loading: false,
    });
  }

  addToCart = (thumbnail, title, price) => {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, { thumbnail, title, price }],
    });
  }

  render() {
    const {
      listProduct,
      loading,
      cartItems,
    } = this.state;

    return (
      <Switch>

        <Route exact path="/">
          <Home
            listProduct={ listProduct }
            loading={ loading }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
        </Route>

        <Route exact path="/cart">
          <ShoppingCart
            cartItems={ cartItems }
          />
        </Route>

        <Route
          exact
          path="/:id"
          render={ (props) => (
            <Details { ...props } cartItems={ cartItems } addToCart={ this.addToCart } />
          ) }
        />

      </Switch>
    );
  }
}

export default Pages;
