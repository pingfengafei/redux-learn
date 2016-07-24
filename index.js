import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import todoAppReducer from './src/reducers/reducers';
import thunk from 'redux-thunk';

let store = createStore(todoAppReducer, applyMiddleware(thunk));


let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)