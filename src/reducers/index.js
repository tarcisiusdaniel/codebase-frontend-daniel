import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from '../pages/Home/reducer';

const rootReducer = combineReducers({
  home,
  routing: routerReducer,
});

export default rootReducer;

