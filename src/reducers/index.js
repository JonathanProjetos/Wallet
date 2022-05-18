import { combineReducers } from 'redux';
import emailReducer from './user';
// import wallet from './wallet';

// Configure os seus reducers.
const rooReducer = combineReducers({
  user: emailReducer,
});

export default rooReducer;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
