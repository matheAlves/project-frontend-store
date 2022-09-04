import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../images/shoppingcart.jpg';

class Product extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props; // vem das propriedades de product passada pelo .map do ProductList.
    const { addToCart } = this.props;
    return (
      <div className="product" data-testid="product">
        <img src={ thumbnail } alt={ title } className="productImg" />
        <h3>{ title }</h3>
        <p>{ price }</p>
        <div className="moreAdd">
          <Link
            data-testid="product-detail-link"
            to={ `/project-frontend-store/${id}` }
          >
            Saiba mais.
          </Link>
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(thumbnail, title, price) }
          >
            <img src={ Image } alt="Adicionar ao Carrinho" />
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
