import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categoria extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <labe>
          Categoria:
          <select
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
        </labe>
      </div>
    );
  }
}

Categoria.propTypes = {
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Categoria;
