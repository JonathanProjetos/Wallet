// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DADOS_API_SYMBOL = 'GET_DADOS_API_SYMBOL';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const getApiDados = (api) => ({
  type: GET_DADOS_API_SYMBOL,
  payload: api,
});

export const fetchSymbols = () => async (dispach) => {
  try {
    const link = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(link);
    const result = await response.json();
    const converArray = Object.keys(result);
    const removeUsdt = converArray.filter((symbol, index) => index !== 1);
    dispach(getApiDados(removeUsdt));
  } catch (error) {
    console.log(error);
  }
};
