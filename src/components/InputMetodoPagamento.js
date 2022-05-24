import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMetodoPagamento extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div className="spacer">
        <label htmlFor="1">
          Metodo De Pagamento:
          <select
            id="1"
            name="method"
            data-testid="method-input"
            value={ method }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

InputMetodoPagamento.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputMetodoPagamento;
