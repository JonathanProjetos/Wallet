import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CompHeader, CompHeaderDiv } from '../Style/Header';

class Header extends Component {
  render() {
    const { setEmail, setExpenses } = this.props;
    let total = 0;
    setExpenses.forEach((dados) => {
      const { currency, exchangeRates, value } = dados;
      total += exchangeRates[currency].ask * Number(value);
    });

    return (
      <CompHeader className="header">
        <CompHeaderDiv className="space-block">
          <h1 className="margins">Trybe Wallet</h1>
          <h2 data-testid="email-field">{`Email: ${setEmail}`}</h2>
        </CompHeaderDiv>
        <div className="space-block">
          <h2 data-testid="header-currency-field">{`${'BRL'}`}</h2>
          <h2
            className="margins-value"
            data-testid="total-field"
          >
            {`${total.toFixed(2)}`}
          </h2>
        </div>
      </CompHeader>
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
