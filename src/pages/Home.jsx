import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import Header from '../components/Header';
import Categories from './Categories';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    const {
      listProduct,
      loading,
      handleChange,
      handleClick,
      addToCart,
    } = this.props;
    return (
      <div>
        <Header handleClick={ handleClick } handleChange={ handleChange } />

        <div className="mainPage">
          <Categories handleChange={ handleChange } />
          { loading
            ? <p> </p>
            : <ProductList products={ listProduct } addToCart={ addToCart } />}
        </div>

        <Footer />

      </div> // passa o valor do listProduct ao products e joga no ProductList
    );
  }
}

Home.propTypes = {
  listProduct: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    })),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
