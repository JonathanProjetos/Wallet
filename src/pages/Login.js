import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../actions';
import { AppHeader, AppInput, AppLabel } from '../Style/Login';
import carteira from '../Style/carteira.png';

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
      <AppHeader>
        <div>
          <img src={ carteira } alt="carteira" />
          <AppLabel htmlFor="1">
            <AppInput
              id="1"
              placeholder="Email do usuario"
              name="email"
              data-testid="email-input"
              type="text"
              value={ email }
              onChange={ this.handleChange }
            />
          </AppLabel>
          <AppLabel>
            <AppInput
              id="2"
              placeholder="Senha"
              name="senha"
              data-testid="password-input"
              type="password"
              value={ senha }
              onChange={ this.handleChange }
            />
          </AppLabel>

          <button
            type="button"
            onClick={ () => this.handleClick() }
            disabled={ btnAcess }
          >
            Entrar
          </button>
        </div>
      </AppHeader>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  setEmail: (email) => dispach(getEmail(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
