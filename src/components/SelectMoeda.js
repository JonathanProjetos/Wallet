import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectMoeda extends Component {
  render() {
    const { moeda, handleChange, currency } = this.props;

    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            value={ currency }
            name="currency"
            onChange={ handleChange }
          // aria-label="moeda"
          >
            { moeda.map((symbol, index) => (
              <option key={ index }>{ symbol }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  moeda: globalState.wallet.currencies,
});

SelectMoeda.propTypes = {
  currency: PropTypes.string.isRequired,
  moeda: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(SelectMoeda);
