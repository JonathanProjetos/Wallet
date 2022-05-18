// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DADOS_API = 'GET_DADOS_API';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const getApiDados = (api) => ({
  type: GET_DADOS_API,
  payload: api,
});
