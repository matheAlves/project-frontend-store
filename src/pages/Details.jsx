import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';

import ProductRating from '../components/ProductRating';
import Header from '../components/Header';

import Image from '../images/shoppingcart.jpg';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const details = await getProductDetails(id);
        this.setState({
          product: details,
          loading: false,
        });
      },
    );
  }

  render() {
    const { product, loading } = this.state;
    const { addToCart } = this.props;

    return (
      <div>
        <Header />
        {console.log(this.props)}
        { loading ? 'Carregando...' : (
          <div>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="product-detail-name">{ product.title }</p>
            <p>{ `R$ ${product.price}` }</p>
            <p>{ product.warranty }</p>
            <p>{ `Status do produto: ${product.status}` }</p>
            <button
              type="button"
              onClick={ () => addToCart(product.thumbnail, product.title, product.price) }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar no carrinho
            </button>
          </div>
        ) }

        <ProductRating />

        <Link to="/">Voltar</Link>
        <Link to="/cart">
          <img src={ Image } alt="carrinho de compras" />
        </Link>

      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Details;
