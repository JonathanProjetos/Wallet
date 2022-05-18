import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  componentDidMount() {

  }

  render() {
    const { setEmail } = this.props;
    console.log(setEmail);
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <h2 data-testid="email-field">{`Email: ${setEmail}`}</h2>
        <h2 data-testid="total-field">{`Despesa Total: $${0}`}</h2>
        <h2 data-testid="header-currency-field">{`${'BRL'}`}</h2>
      </section>
    );
  }
}

const mapStateToProps = (globalState) => ({
  setEmail: globalState.user.email,
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
