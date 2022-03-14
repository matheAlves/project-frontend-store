import React, { Component } from 'react';
import PrevList from './RatingsPrevList';

class ProductRating extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      rating: '',
      review: '',
      loading: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async () => {
    const { email, rating, review } = this.state;
    const newRating = {
      email,
      rating,
      review,
    };
    if (rating) {
      this.setState({
        loading: true,
      }, () => {
        const prevRatings = JSON.parse(localStorage.getItem('ratings'));
        localStorage.setItem('ratings', JSON.stringify([...prevRatings, newRating]));
        this.setState({
          loading: false,
        });
      });
    }
  }

  render() {
    const ratings = ['1', '2', '3', '4', '5'];
    const { loading } = this.state;
    return (
      <div>
        <form>

          <label htmlFor="product-detail-email">
            Email:
            <input
              onChange={ this.handleChange }
              type="email"
              name="email"
              data-testid="product-detail-email"
              id="product-detail-email"
            />
          </label>

          <section>
            {ratings.map((rating) => (
              <label
                htmlFor={ `${rating}-rating` }
                key={ rating }
              >
                <input
                  onChange={ this.handleChange }
                  data-testid={ `${rating}-rating` }
                  type="radio"
                  value={ rating }
                  name="rating"
                  id={ `${rating}-rating` }
                />
                {rating}
              </label>
            ))}
          </section>

          <label
            htmlFor="review"
          >
            Avaliação:
            <textarea
              id="review"
              name="review"
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
          </label>

          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.handleSubmit }
          >
            Enviar
          </button>

        </form>

        <section>
          {loading
            ? <p>Loading</p>
            : <PrevList />}
        </section>
      </div>
    );
  }
}

export default ProductRating;
