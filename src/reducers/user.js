// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default emailReducer;
