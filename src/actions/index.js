// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DADOS_API_SYMBOL = 'GET_DADOS_API_SYMBOL';
export const GET_DADOS_FORM_WALLET = 'GET_DADOS_FORM_WALLET';
export const GET_DADOS_ALL_API = 'GET_DADOS_ALL_API';
export const REMOVE_ITEM_TABELA = 'REMOVE_ITEM_TABELA';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const getApiDados = (api) => ({
  type: GET_DADOS_API_SYMBOL,
  payload: api,
});

export const getFormWallet = (formResult) => ({
  type: GET_DADOS_FORM_WALLET,
  payload: formResult,
});

export const getAllDadosApi = (dadosApi) => ({
  type: GET_DADOS_ALL_API,
  payload2: dadosApi,
});

export const RemoveItemTabela = (tabela) => ({
  type: REMOVE_ITEM_TABELA,
  payload: tabela,
});

export const fetchSymbols = () => async (dispach) => {
  try {
    const link = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(link);
    const result = await response.json();
    dispach(getApiDados(result));
    dispach(getAllDadosApi(result));
  } catch (error) {
    console.log(error);
  }
};
