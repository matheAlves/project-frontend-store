import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import './Categories.css';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      listCategories: [],
    };

    this.getListCategories = this.getListCategories.bind(this);
  }

  componentDidMount() {
    this.getListCategories();
  }

  async getListCategories() {
    this.setState({
      listCategories: [...await getCategories()],
    });
  }

  render() {
    const { listCategories } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="categories">

        <h2 className="titleCategories">
          Categorias
        </h2>

        <div className="divLabels">
          {listCategories.map((categories) => (
            <label
              className="labelCategories"
              key={ categories.id }
              htmlFor={ categories.id }
            >
              <input
                className="inputCategories"
                data-testid="category"
                type="radio"
                name="category"
                id={ categories.id }
                onClick={ handleChange }
              />

              { categories.name }

            </label>

          ))}
        </div>

      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
