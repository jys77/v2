import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles';
import App from './App';
import { Store } from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
