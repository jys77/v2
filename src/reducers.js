import { TOGGLE_DARK_MODE, CHANGE_LANG } from './constants';
import { Langs } from './langs';

const darkMode = localStorage.getItem('darkMode') === 'true' || false;

let locale = localStorage.getItem('locale') || navigator.language.slice(0, 2);
if (locale !== 'en' && locale !== 'zh') {
  locale = 'en';
}

const initialState = {
  darkMode,
  locale,
  lang: Langs[locale].data,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      localStorage.setItem('darkMode', !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case CHANGE_LANG:
      const locale = action.payload;
      localStorage.setItem('locale', locale);
      return {
        ...state,
        locale,
        lang: Langs[locale].data,
      };
    default:
      return state;
  }
};
