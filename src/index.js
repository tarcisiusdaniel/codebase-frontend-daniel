import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import configureStore, { history } from './store/configureStore';
import Root from './Root';
import { createStore } from 'redux';
require('./favicon.ico');

const store = configureStore();

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// );

render (
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const newRoot = require('./Root').default;
    render (
      <AppContainer>
        <newRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}