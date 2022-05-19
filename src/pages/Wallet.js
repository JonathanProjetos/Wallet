import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchSymbols } from '../actions';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class Wallet extends React.Component {

  componentDidMount() {
    const { fetchSymbols } = this.props;
    fetchSymbols();
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
  fetchSymbols: () => dispatch(fetchSymbols()),
});

Wallet.propTypes = {

};

export default connect(null, mapDispatchToProps)(Wallet);
