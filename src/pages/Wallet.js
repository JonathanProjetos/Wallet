import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputValor from '../components/InputValor';
import SelectMoeda from '../components/SelectMoeda';
import InputMetodoPagamento from '../components/InputMetodoPagamento';
import Categoria from '../components/Categoria';
import Descricao from '../components/Descrição';
import Tabela from '../components/Tabela';
import { fetchSymbols, getFormWallet } from '../actions';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  async componentDidMount() {
    const { fetchSymbolsApi } = this.props;
    await fetchSymbolsApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { getForm, fetchSymbolsApi } = this.props;
    this.setState((previ) => ({
      id: previ.id + 1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    }));
    fetchSymbolsApi();
    getForm(this.state);
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    return (
      <main>
        <nav>
          <Header />
        </nav>
        <section className="App-Test">
          <InputValor
            value={ value }
            handleChange={ this.handleChange }
          />
          <SelectMoeda
            currency={ currency }
            handleChange={ this.handleChange }
          />
          <InputMetodoPagamento
            method={ method }
            handleChange={ this.handleChange }
          />
          <Categoria
            tag={ tag }
            handleChange={ this.handleChange }
          />
          <Descricao
            description={ description }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ () => this.handleClick() }
          >
            Adicionar despesa
          </button>
        </section>
        <saction>
          <Tabela />
        </saction>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSymbolsApi: () => dispatch(fetchSymbols()),
  getForm: (form) => dispatch(getFormWallet(form)),
});

const mapStateToProps = (state) => ({
  resultadoApi: state.wallet.currencies,
});

Wallet.propTypes = {
  fetchSymbolsApi: PropTypes.func.isRequired,
  getForm: PropTypes.func.isRequired,
  // getReting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
