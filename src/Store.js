import { createStore, compose } from 'redux';
import { reducers } from './reducers';

const darkMode = localStorage.getItem('darkMode') || false;
const initialState = {
  darkMode,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(reducers, initialState, composeEnhancers());
