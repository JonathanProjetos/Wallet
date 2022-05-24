import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValor extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="spacer">
        <label htmlFor="1">
          Valor:
          <input
            id="1"
            type="text"
            value={ value }
            data-testid="value-input"
            onChange={ handleChange }
            name="value"
          />
        </label>
      </div>
    );
  }
}

InputValor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputValor;
