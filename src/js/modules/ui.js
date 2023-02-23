import Calculator from './calculator';

const calculator = new Calculator();

export default class UI {
  static screen = document.getElementById('calculator-number');

  static numberKeys = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    decimal: '.',
  };

  static functionKeys = {
    add: '+',
    subtract: '-',
    multiply: '×',
    divide: '/',
  };

  // eslint-disable-next-line class-methods-use-this
  useKeypad(key) {
    if (key in UI.numberKeys) {
      UI.useNumbers(key);
    } else if (key in UI.functionKeys) {
      UI.useFunction(key);
    } else if (key === 'delete') {
      UI.useDelete();
    } else if (key === 'reset') {
      UI.useReset();
    } else if (key === 'enter') {
      UI.useEnter();
    }
  }

  static useNumbers(key) {
    const numLastIndex = UI.screen.textContent.length - 1;
    // If key is decimal
    if (key === 'decimal') {
      // Execute if decimal is not last index or already within string
      if (
        UI.screen.textContent.indexOf('.') !== numLastIndex &&
        UI.screen.textContent.indexOf('.') === -1
      ) {
        UI.screen.textContent = `${calculator.getCurrentValue()}.`;
      }
      // If number has decimal before
    } else if (UI.screen.textContent.substring(numLastIndex) === '.') {
      calculator.currentValue = `${calculator.getCurrentValue()}.${
        UI.numberKeys[key]
      }`;
      UI.screen.textContent = calculator.getCurrentValue();
      // If current value is not zero
    } else if (calculator.currentValue !== 0) {
      calculator.currentValue = String(
        calculator.getCurrentValue() + UI.numberKeys[key]
      );
      UI.screen.textContent = calculator.getCurrentValue();
      // Replace current value if it is zero
    } else {
      calculator.currentValue = UI.numberKeys[key];
      UI.screen.textContent = calculator.getCurrentValue();
    }
  }

  static useFunction(key) {
    const functions = ['+', '-', '×', '/'];
    for (let i = 0; i < functions.length; i += 1) {
      if (UI.screen.textContent.indexOf(functions[i]) !== -1) {
        const operands = calculator.currentValue.split(functions[i]);
        let num;
        [calculator.currentValue, num] = operands;
        if (functions[i] === '+') {
          calculator.add(num);
        } else if (functions[i] === '-') {
          calculator.subtract(num);
        } else if (functions[i] === '×') {
          calculator.multiply(num);
        } else if (functions[i] === '/') {
          calculator.divide(num);
        }
        UI.screen.textContent = `${calculator.getCurrentValue()}${
          UI.functionKeys[key]
        }`;
        calculator.currentValue = `${calculator.getCurrentValue()}${
          UI.functionKeys[key]
        }`;
        return;
      }
    }
    calculator.currentValue += UI.functionKeys[key];
    UI.screen.textContent = calculator.getCurrentValue();
  }

  static useEnter() {
    const functions = ['+', '-', '×', '/'];
    for (let i = 0; i < functions.length; i += 1) {
      if (UI.screen.textContent.indexOf(functions[i]) !== -1) {
        const operands = calculator.currentValue.split(functions[i]);
        let num;
        [calculator.currentValue, num] = operands;
        if (functions[i] === '+') {
          calculator.add(num);
        } else if (functions[i] === '-') {
          calculator.subtract(num);
        } else if (functions[i] === '×') {
          calculator.multiply(num);
        } else if (functions[i] === '/') {
          calculator.divide(num);
        }
        UI.screen.textContent = `${calculator.getCurrentValue()}`;
        return;
      }
    }
  }

  static useDelete() {
    calculator.delete();
    UI.screen.textContent = calculator.getCurrentValue();
  }

  static useReset() {
    calculator.reset();
    UI.screen.textContent = calculator.getCurrentValue();
  }
}
