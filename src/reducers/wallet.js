// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_DADOS_API_SYMBOL,
  GET_DADOS_FORM_WALLET,
  REMOVE_ITEM_TABELA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_DADOS_API_SYMBOL:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((symbol, index) => index !== 1),
      exchangeRates: action.payload,
    };
  case GET_DADOS_FORM_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        exchangeRates: { ...state.exchangeRates },
      }],
    };
  case REMOVE_ITEM_TABELA:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
