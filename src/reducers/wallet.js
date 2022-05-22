// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_DADOS_API_SYMBOL,
  GET_DADOS_FORM_WALLET,
  REMOVE_ITEM_TABELA,
  EDIT_TABELA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_DADOS_API_SYMBOL:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((symbol, index) => index !== 1),
    };
  case GET_DADOS_FORM_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
      }],
    };
  case REMOVE_ITEM_TABELA:
    return {
      ...state,
      expenses: action.payload1,
    };
  case EDIT_TABELA:
    return {
      ...state,
      expenses: action.payload2,
    };
  default:
    return state;
  }
};

export default walletReducer;
