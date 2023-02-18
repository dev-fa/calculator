import LS from './modules/localStorage';

const ls = new LS();
document.onload = ls.loadThemeStorage();
