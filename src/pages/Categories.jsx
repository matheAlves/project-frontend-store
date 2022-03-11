import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

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

        {listCategories.map((categories) => (
          <label key={ categories.id } htmlFor={ categories.id }>
            { categories.name }

            <input
              data-testid="category"
              type="radio"
              name="category"
              id={ categories.id }
              onClick={ handleChange }
            />

          </label>

        ))}

      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
