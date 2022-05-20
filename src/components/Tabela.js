import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';

class Tabela extends Component {
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
          <thead className="tabela">
            <tr className="tabela">
              { titulos.map((titulo) => (
                <th key={ titulo } className="tabela">{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tabela">
            {
              dadosState.map((table) => (
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
                    <button type="button"> Excluir </button>
                    <button type="button"> Editar</button>
                  </td>
                  {/* <td><Button /></td> */}
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

Tabela.propTypes = {
  dadosState: PropTypes.objectOf().isRequired,
};

export default connect(mapStateToProps)(Tabela);
