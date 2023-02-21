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
    this.currentValue += number;
  }

  subtract(number) {
    this.currentValue -= number;
  }

  multiply(number) {
    this.currentValue *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }

    this.currentValue /= number;
  }
}
