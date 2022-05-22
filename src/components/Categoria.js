import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categoria extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="1">
          Categoria:
          <select
            id="1"
            name="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Categoria.propTypes = {
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Categoria;
