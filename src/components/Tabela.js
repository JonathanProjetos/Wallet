import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RemoveItemTabela } from '../actions';
import '../App.css';

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
                  <td className="tabela">{table.id}</td>
                  <td className="tabela">{parseFloat(table.value).toFixed(2)}</td>
                  <td className="tabela">{table.exchangeRates[table.currency].name}</td>
                  <td className="tabela">{table.method}</td>
                  <td className="tabela">{table.tag}</td>
                  <td className="tabela">{table.description}</td>
                  <td className="tabela">
                    {
                      parseFloat(table.exchangeRates[table.currency].ask).toFixed(2)
                    }
                  </td>
                  <td className="tabela">
                    {
                      parseFloat(table.value
                        * table.exchangeRates[table.currency].ask).toFixed(2)
                    }
                  </td>
                  <td className="tabela">Real</td>
                  <td>
                    <button
                      id={ index }
                      data-testid="edit-btn"
                      type="button"
                      onClick={ handleClickEdit }
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
  handleClickEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
