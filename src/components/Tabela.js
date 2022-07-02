import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RemoveItemTabela } from '../actions';
import '../App.css';
import prancheta from '../Style/prancheta.png';
import remover from '../Style/remover.png';

class Tabela extends Component {
  constructor() {
    super();
    this.state = {
      //  value: 0,
    };
  }

  handleClick = ({ target }) => {
    const { dadosState, removeTabela } = this.props;
    const filtroArray = dadosState.filter((coluna, index) => index !== Number(target.id));
    removeTabela(filtroArray);
  }

  onKeyPressHandler = () => {
    console.log('clicou');
  }

  render() {
    const { dadosState, handleClickEdit } = this.props;
    const titulos = [
      'id',
      'Valor',
      'Moeda',
      'Método de pagamento',
      'Tag',
      'Descrição',
      'Câmbio utilizado',
      'Valor convertido ',
      'Moeda de conversão',
      'Editar/Excluir'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              { titulos.map((titulo) => (
                <th key={ titulo }>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              dadosState.map((table, index) => (
                <tr key={ table.id }>
                  <td>{table.id}</td>
                  <td>{parseFloat(table.value).toFixed(2)}</td>
                  <td>{table.exchangeRates[table.currency].name}</td>
                  <td>{table.method}</td>
                  <td>{table.tag}</td>
                  <td>{table.description}</td>
                  <td>
                    {
                      parseFloat(table.exchangeRates[table.currency].ask).toFixed(2)
                    }
                  </td>
                  <td>
                    {
                      parseFloat(table.value
                        * table.exchangeRates[table.currency].ask).toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>
                    <img
                      src={ prancheta }
                      id={ index }
                      data-testid="edit-btn"
                      onClick={ handleClickEdit }
                      alt="prancheta"
                      onKeyPress={ this.onKeyPressHandler }
                      role="presentation"
                    />

                    <img
                      src={ remover }
                      id={ index }
                      data-testid="delete-btn"
                      onClick={ this.handleClick }
                      alt="remover"
                      onKeyPress={ this.onKeyPressHandler }
                      role="presentation"
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dadosState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeTabela: (iten) => dispatch(RemoveItemTabela(iten)),
});

Tabela.propTypes = {
  dadosState: PropTypes.arrayOf(Object).isRequired,
  removeTabela: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
