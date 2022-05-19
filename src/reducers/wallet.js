// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const GET_DADOS_API_SYMBOL = 'GET_DADOS_API_SYMBOL';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_DADOS_API_SYMBOL:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
