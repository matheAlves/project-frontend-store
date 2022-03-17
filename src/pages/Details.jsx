import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import ProductRating from '../components/ProductRating';
import Header from '../components/Header';

import './Details.css';

import Footer from '../components/Footer';

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

        {loading ? 'Carregando...' : (
          <div className="flex">
      
            <div className="product-image">
              <img src={ product.thumbnail } alt={ product.title } />
            </div>

            <div className="product-details">
  
              <h1 data-testid="product-detail-name">{product.title}</h1>
              <p>{`R$ ${product.price}`}</p>
              <p>{product.warranty}</p>
              <p>{`${product.sold_quantity} vendidos`}</p>

              <button
                className="button-details"
                type="button"
                onClick={ () => addToCart(product
                  .thumbnail, product.title, product.price) }
                data-testid="product-detail-add-to-cart"
              >
                Adicionar no carrinho
              </button>
              
            </div>
            
          </div>
        )}

        <ProductRating />

        <Footer />

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
