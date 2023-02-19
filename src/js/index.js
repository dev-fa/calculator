/* eslint-disable no-console */
import LS from './modules/localStorage';
import Calculator from './modules/calculator';

const ls = new LS();
document.onload = ls.loadThemeStorage();

const calculator = new Calculator();
console.log(calculator.getCurrentValue());
// calculator.setCurrentValue(1);
// calculator.setCurrentValue(2);
// console.log(calculator.getCurrentValue());
// calculator.add(7);
// console.log(calculator.getCurrentValue());
// calculator.subtract(5);
// console.log(calculator.getCurrentValue());
// calculator.multiply(3);
// console.log(calculator.getCurrentValue());
// calculator.delete();
// console.log(calculator.getCurrentValue());
// calculator.clear();
// console.log(calculator.getCurrentValue());
