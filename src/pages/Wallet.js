import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchSymbols } from '../actions';

class Wallet extends Component {
  componentDidMount() {
    const { fetchSymbolsApi } = this.props;
    fetchSymbolsApi();
  }

  render() {
    return (
      <nav>
        <Header />
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSymbolsApi: () => dispatch(fetchSymbols()),
});

Wallet.propTypes = {
  fetchSymbolsApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
