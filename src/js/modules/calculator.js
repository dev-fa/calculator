export default class Calculator {
  constructor() {
    this.currentValue = 0;
  }

  getCurrentValue() {
    return String(this.currentValue);
  }

  setCurrentValue(number) {
    this.currentValue = Number(number);
  }

  reset() {
    this.currentValue = 0;
  }

  delete() {
    const tempValue = String(this.currentValue);
    if (tempValue.length === 1) {
      this.currentValue = 0;
    } else {
      const newValue = tempValue.substring(0, tempValue.length - 1);
      this.currentValue = newValue;
    }
  }

  add(number) {
    const firstOperand = Number(this.currentValue);
    const secondOperand = Number(number);
    this.currentValue = Number((firstOperand + secondOperand).toFixed(2));
  }

  subtract(number) {
    const firstOperand = Number(this.currentValue);
    const secondOperand = Number(number);
    this.currentValue = Number((firstOperand - secondOperand).toFixed(2));
  }

  multiply(number) {
    const firstOperand = Number(this.currentValue);
    const secondOperand = Number(number);
    this.currentValue = Number((firstOperand * secondOperand).toFixed(2));
  }

  divide(number) {
    if (number !== '0') {
      const firstOperand = Number(this.currentValue);
      const secondOperand = Number(number);
      this.currentValue = Number((firstOperand / secondOperand).toFixed(2));
    }
  }
}
