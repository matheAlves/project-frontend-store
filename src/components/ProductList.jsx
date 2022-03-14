import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products } = this.props; // vem das props passadas na página home.
    const { results } = products;
    return (
      <div>
        { results.map((product) => <Product key={ product.id } product={ product } />) }
      </div> // cria um novo array a partir dos products e passa como valor ao component Product.
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    })),
  }).isRequired,
};
export default ProductList;
