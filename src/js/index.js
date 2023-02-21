/* eslint-disable no-console */
import LS from './modules/localStorage';
import UI from './modules/ui';

const keypadKeys = document.querySelectorAll('[data-key]');

const ui = new UI();

keypadKeys.forEach((key) => {
  key.addEventListener('click', () => {
    ui.useKeypad(key.getAttribute('data-key'));
  });
});

const ls = new LS();
document.onload = ls.loadThemeStorage();
