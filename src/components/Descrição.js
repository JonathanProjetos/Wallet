import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Descricao extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div className="spacer">
        <label htmlFor="1">
          Descrição:
          <input
            id="1"
            type="text"
            value={ description }
            data-testid="description-input"
            onChange={ handleChange }
            name="description"
          />
        </label>
      </div>
    );
  }
}

Descricao.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Descricao;
