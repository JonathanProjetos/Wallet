import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RemoveItemTabela } from '../actions';
import '../App.css';

class Tabela extends Component {
  handleClick = ({ target }) => {
    const { dadosState, removeTabela } = this.props;
    const filtroArray = dadosState.filter((coluna, index) => index !== Number(target.id));
    removeTabela(filtroArray);
  }

  render() {
    const { dadosState } = this.props;
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
        <table className="tabela">
          <thead>
            <tr className="tabela">
              { titulos.map((titulo) => (
                <th key={ titulo } className="tabela">{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tabela">
            {
              dadosState.map((table, index) => (
                <tr key={ table.id } className="tabela">
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
                    <button
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      id={ index }
                      data-testid="delete-btn"
                      type="button"
                      onClick={ this.handleClick }
                    >
                      Excluir
                    </button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
