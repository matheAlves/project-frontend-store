import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import ProductRating from '../components/ProductRating';

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
    return (
      <div>
        { loading ? 'Carregando...' : (
          <div>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="product-detail-name">{ product.title }</p>
            <p>{ `R$ ${product.price}` }</p>
            <p>{ product.warranty }</p>
            <p>{ `Status do produto: ${product.status}` }</p>
            <button type="submit"> Adicionar no carrinho </button>
          </div>
        ) }
        <ProductRating />
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
};

export default Details;
