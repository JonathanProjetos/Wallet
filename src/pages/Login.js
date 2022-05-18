import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      btnAcess: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validacao());
  }
  // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript/48800#48800 validação via regex

  validadeEmails = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  validacao = () => {
    const { email, senha } = this.state;
    const MAGIC_SIX = 6;
    if (senha.length >= MAGIC_SIX && this.validadeEmails(email)) {
      return this.setState({
        btnAcess: false,
      });
    }
    this.setState({
      btnAcess: true,
    });
  }

  handleClick = () => {
    const { email } = this.state;
    const { setEmail, history } = this.props;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, btnAcess } = this.state;
    return (
      <section className="App-header">
        <label htmlFor="1">
          Email:
          <input
            id="1"
            name="email"
            data-testid="email-input"
            type="text"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="2">
          Password:
          <input
            id="2"
            name="senha"
            data-testid="password-input"
            type="password"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick() }
          disabled={ btnAcess }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  setEmail: (email) => dispach(getEmail(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
