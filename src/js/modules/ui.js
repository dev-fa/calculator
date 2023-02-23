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

  static functions = ['+', '-', '×', '/'];

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

  static checkDecimal() {
    for (let i = 0; i < UI.functions.length; i += 1) {
      if (UI.screen.textContent.indexOf(UI.functions[i]) !== -1) {
        const operands = calculator.currentValue.split(UI.functions[i]);
        const num = operands[1];
        if (num.indexOf('.') === -1) {
          return true;
        }
      }
    }

    if (UI.screen.textContent.indexOf('.') === -1) {
      return true;
    }

    return false;
  }

  static useNumbers(key) {
    if (key === 'decimal') {
      if (UI.checkDecimal()) {
        UI.screen.textContent = `${calculator.getCurrentValue()}.`;
        calculator.currentValue = UI.screen.textContent;
      }
    } else if (calculator.currentValue !== 0) {
      calculator.currentValue = String(
        calculator.getCurrentValue() + UI.numberKeys[key]
      );
      UI.screen.textContent = calculator.getCurrentValue();
    } else if (calculator.currentValue === 0) {
      calculator.currentValue = UI.numberKeys[key];
      UI.screen.textContent = calculator.getCurrentValue();
    }
  }

  static useFunction(key) {
    for (let i = 0; i < UI.functions.length; i += 1) {
      if (UI.screen.textContent.indexOf(UI.functions[i]) !== -1) {
        const operands = calculator.currentValue.split(UI.functions[i]);
        let num;
        [calculator.currentValue, num] = operands;
        if (UI.functions[i] === '+') {
          calculator.add(num);
        } else if (UI.functions[i] === '-') {
          calculator.subtract(num);
        } else if (UI.functions[i] === '×') {
          calculator.multiply(num);
        } else if (UI.functions[i] === '/') {
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
    for (let i = 0; i < UI.functions.length; i += 1) {
      if (UI.screen.textContent.indexOf(UI.functions[i]) !== -1) {
        const operands = calculator.currentValue.split(UI.functions[i]);
        let num;
        [calculator.currentValue, num] = operands;
        if (UI.functions[i] === '+') {
          calculator.add(num);
        } else if (UI.functions[i] === '-') {
          calculator.subtract(num);
        } else if (UI.functions[i] === '×') {
          calculator.multiply(num);
        } else if (UI.functions[i] === '/') {
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
