import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props; // vem das props passadas na página home.
    const { results } = products;
    return (
      <div className="productList">
        {
          results.map((product) => (<Product
            key={ product.id }
            product={ product }
            addToCart={ addToCart }
          />))
        }
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
  addToCart: PropTypes.func.isRequired,
};
export default ProductList;
