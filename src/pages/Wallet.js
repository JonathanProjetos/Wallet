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
import { fetchSymbols,
  getFormWallet, changeButtonBoolean, objectEdited } from '../actions';
import { MainBody, MainSection, TabelaStyle } from '../Style/Wallet';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
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

  handleClickEdit = ({ target }) => {
    const { changeButton, editFormDados } = this.props;
    const clicado = editFormDados.find((form) => Number(form.id) === Number(target.id));
    console.log(clicado.id);
    changeButton(true, clicado.id);
  }

  handleChangeObj = () => {
    const { value, currency, method, tag, description } = this.state;
    const { changeBooolean, objectEditedFinal } = this.props;
    const newObject = {
      id: changeBooolean.id,
      value,
      currency,
      method,
      tag,
      description,
    };
    objectEditedFinal(newObject);
  }

  handleClick = async () => {
    const { getForm, fetchSymbolsApi } = this.props;
    const resultdoApi = await fetchSymbolsApi();
    this.setState({ exchangeRates: resultdoApi });
    getForm(this.state);
    this.setState((previ) => ({
      id: previ.id + 1,
      value: '',
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
    }));
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { changeBooolean } = this.props;
    const boolean = changeBooolean ? changeBooolean.isEditMode : false;
    return (
      <MainBody className="body-color">
        <nav>
          <Header />
        </nav>
        <MainSection className="nav">
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
          {
            boolean ? (
              <button
                onClick={ () => this.handleChangeObj() }
                type="button"
              >
                Editar despesa
              </button>

            ) : (
              <button
                type="button"
                onClick={ () => this.handleClick() }
              >
                Adicionar despesa
              </button>
            )
          }
        </MainSection>
        <TabelaStyle>
          <Tabela handleClickEdit={ this.handleClickEdit } />
        </TabelaStyle>
      </MainBody>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSymbolsApi: () => dispatch(fetchSymbols()),
  getForm: (form) => dispatch(getFormWallet(form)),
  // editForm: (edit) => dispatch(editTabela(edit)),
  changeButton: (value, id) => dispatch(changeButtonBoolean(value, id)),
  objectEditedFinal: (obj) => dispatch(objectEdited(obj)),
});

const mapStateToProps = (state) => ({
  resultadoApi: state.wallet.currencies,
  editFormDados: state.wallet.expenses,
  changeBooolean: state.wallet.btnBoolean,
});

Wallet.propTypes = {
  fetchSymbolsApi: PropTypes.func.isRequired,
  getForm: PropTypes.func.isRequired,
  changeButton: PropTypes.func.isRequired,
  changeBooolean: PropTypes.objectOf(Object).isRequired,
  editFormDados: PropTypes.arrayOf(Object).isRequired,
  objectEditedFinal: PropTypes.func.isRequired,
  // isEditMode: PropTypes.string.isRequired,
  // getReting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
