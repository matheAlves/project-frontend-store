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
        localStorage.setItem('ratings', JSON.stringify([newRating, ...prevRatings]));
        this.setState({
          loading: false,
        });
      });
    }
  }

  render() {
    const ratings = ['1', '2', '3', '4', '5'];
    const emojis = ['😢', '😕', '😐', '🙂', '😍'];
    const { loading, rating } = this.state;
    return (
      <div className="flex">
        <section className="new-review">
          <h1>Avalie:</h1>
          <form>

            <label htmlFor="product-detail-email">
              <p>Email:</p>
              <input
                onChange={ this.handleChange }
                type="email"
                name="email"
                data-testid="product-detail-email"
                id="product-detail-email"
                className="product-detail-email"
              />
            </label>

            <section className="emojis">
              {ratings.map((currRating, index) => (
                <div
                  key={ currRating }
                >
                  <input
                    className="radio-button"
                    onChange={ this.handleChange }
                    data-testid={ `${currRating}-rating` }
                    type="radio"
                    value={ currRating }
                    name="rating"
                    id={ `${currRating}-rating` }
                  />
                  <label
                    htmlFor={ `${currRating}-rating` }
                  >
                    <p
                      className="label-radio"
                    >
                      {emojis[index]}
                    </p>
                  </label>
                </div>

              ))}
            </section>

            <label
              htmlFor="review"
            >
              <p>{`Minha avaliação é ${rating} porque:`}</p>
              <textarea
                id="review"
                name="review"
                onChange={ this.handleChange }
                data-testid="product-detail-evaluation"
              />
            </label>

            <button
              className="button-details"
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.handleSubmit }
            >
              Enviar
            </button>

          </form>
        </section>

        <section className="previous-reviews">
          {loading
            ? <p>Loading</p>
            : <PrevList />}
        </section>
      </div>
    );
  }
}

export default ProductRating;
