import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { setEmail, setExpenses } = this.props;
    let total = 0;
    setExpenses.forEach((dados) => {
      const { currency, exchangeRates, value } = dados;
      total += exchangeRates[currency].ask * Number(value);
    });

    return (
      <section>
        <h1>Trybe Wallet</h1>
        <h2 data-testid="email-field">{`Email: ${setEmail}`}</h2>
        <h2
          data-testid="total-field"
        >
          {`${total.toFixed(2)}`}
        </h2>
        <h2 data-testid="header-currency-field">{`${'BRL'}`}</h2>
      </section>
    );
  }
}

const mapStateToProps = (globalState) => ({
  setEmail: globalState.user.email,
  setExpenses: globalState.wallet.expenses,
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
  setExpenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
