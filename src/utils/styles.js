import { COLORS, DARK_MODE_THEME, LIGHT_MODE_THEME } from './constants';

export const getTextColor = (theme) => {
  return theme === DARK_MODE_THEME ? LIGHT_MODE_THEME : DARK_MODE_THEME;
};

export const getBackgroundColor = (theme) => {
  return theme === DARK_MODE_THEME ? COLORS.GREY : COLORS.WHITE;
};
