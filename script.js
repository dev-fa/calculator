// add
function add(num1, num2) {
    return num1 + num2;
}

// subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// divide
function divide(num1, num2) {
    return num1 / num2;
}

// operate = takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

console.log(operate("+", 9, 10)); // 19
console.log(operate("-", 84, 14)); // 70
console.log(operate("*", 6, 5)); // 30
console.log(operate("/", 50, 5)); // 10