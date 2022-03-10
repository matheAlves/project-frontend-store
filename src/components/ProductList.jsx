import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    const { results } = products;
    return (
      <div>
        { results.map((product) => <Product key={ product.id } product={ product } />) }
      </div>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductList;
