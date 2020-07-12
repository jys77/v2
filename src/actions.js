import { TOGGLE_DARK_MODE, CHANGE_LANG } from './constants';

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};

export const changeLang = (locale) => {
  return {
    type: CHANGE_LANG,
    payload: locale,
  };
};
