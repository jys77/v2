import { TOGGLE_DARK_MODE } from './constants';
let darkMode = localStorage.getItem('darkMode') || false;

const initialState = {
  darkMode,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      localStorage.setItem('darkMode', !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
