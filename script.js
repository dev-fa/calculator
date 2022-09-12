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
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
    }
    calculated.textContent = answer;
    return parseInt(answer);
}

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const operateBtn = document.getElementById("operate");

const calculations = document.getElementById("calculations");
calculations.textContent = "0";
const calculated = document.getElementById("calculated");


// Display pressed number buttons on calculations display
function displayCalculations(e) {
    if (calculations.textContent === "0") calculations.textContent = "";
    calculations.textContent += this.textContent;
}

const numberBtns = document.getElementsByClassName("number");

for (i of numberBtns) {
    i.addEventListener("click", displayCalculations);
}


// Store first number that is input when user presses an operator
// Store second number if first number is already defined when user presses an operator or operate function
// Set calculated answer as first number and remove second number
function storeOperator(e) {
    let solution = calculations.textContent;
    let calculatedAnswer;
    if (typeof firstOperand === "undefined") {
        firstOperand = parseInt(calculations.textContent);
        calculations.textContent += this.textContent;
    } else if (typeof firstOperand != "undefined"){
        calculationArray = calculations.textContent.split(/\+|-|\/|\*/g);
        secondOperand = parseInt(calculationArray[1]);

        if (solution.includes("+")) {
            calculatedAnswer = operate("+", firstOperand, secondOperand);
        } else if (solution.includes("-")) {
            calculatedAnswer = operate("-", firstOperand, secondOperand);
        } else if (solution.includes("*")) {
            calculatedAnswer = operate("*", firstOperand, secondOperand);
        } else if (solution.includes("/")) {
            calculatedAnswer = operate("/", firstOperand, secondOperand);
        }

        calculations.textContent = calculatedAnswer + this.textContent;
        firstOperand = calculatedAnswer;
        secondOperand;
    }
}

let firstOperand;
let secondOperand;
let calculationArray = [];

const operatorBtns = document.getElementsByClassName("operator");

for (i of operatorBtns) {
    i.addEventListener("click", storeOperator)
}

// Display calculated number from calculations to display


// Save which operation has been chosen and then operate() on them when the user presses the “=” key