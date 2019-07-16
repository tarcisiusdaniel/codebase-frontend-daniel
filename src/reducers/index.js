import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from '../pages/Home/reducer';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const rootReducer = combineReducers({
  home,
  routing: routerReducer,
  counter: counterReducer,
  isLogged: loggedReducer
});

export default rootReducer;

