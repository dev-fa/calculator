function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator, num1, num2) {
    let answer;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
    return Math.round(answer * 100) / 100;
}


// Populates display based on number button input
function displayCalculations(e) {
    if (calculations.textContent === "0") calculations.textContent = "";
    calculations.textContent += this.textContent;
}


/* When operator button is pressed the first time, store the first operand and the operator.
   When operator button is pressed after the second operand is declared, 
   call displayAnswer function using previous operator, then store the next operator and add it to display.
   When operator button is pressed when first operand is declared but second operand is not,
   update first operand if new numbers are inputted and store the operator.*/
function storeOperator(e) {
    calculationArray = [];
    calculationArray = calculations.textContent.split(/\+|-|\/|\*/g);
    calculations.textContent += this.textContent;

    if (typeof firstOperand === "undefined") {
        firstOperand = calculationArray[0];
        operator = this.textContent;
    } else {
        if (calculationArray[1] !== undefined) {
            displayAnswer();
            calculations.textContent += this.textContent;
            operator = this.textContent;
        } else {
            firstOperand = calculationArray[0];
            operator = this.textContent;
        }    
    }
}


/* Calculate expression in calculations display then populate 
   the calculated display with operate functions return value.*/
function displayAnswer() {
    solution = calculations.textContent;
    let calculatedAnswer;

    calculationArray = calculations.textContent.split(/\+|-|\/|\*/g);
    secondOperand = calculationArray[1];

    switch (operator) {
        case "+":
            calculatedAnswer = operate("+", firstOperand, secondOperand);
            break;
        case "-":
            calculatedAnswer = operate("-", firstOperand, secondOperand);
            break;
        case "*":
            calculatedAnswer = operate("*", firstOperand, secondOperand);
            break;
        case "/":
            // Show error if diving by zero then clear the display
            if (firstOperand == "0" || secondOperand == "0") {
                alert("Error: You cannot divide by zero.");
                clearDisplay();
                firstOperand = "0";
                return;
            } else {
                calculatedAnswer = operate("/", firstOperand, secondOperand);
                break;
            }
    }

    calculated.textContent = calculatedAnswer;
    calculations.textContent = calculatedAnswer;
    firstOperand = calculatedAnswer;
    secondOperand = undefined;
}


// Clear the display and reset all arithmetic variables.
function clearDisplay() {
    firstOperand = undefined;
    secondOperand = undefined;
    operator = undefined;

    calculations.textContent = "0";
    calculated.textContent = "0";
}


// Number buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const numberBtns = document.getElementsByClassName("number");
for (i of numberBtns) {
    i.addEventListener("click", displayCalculations);
}

// Decimal button
const decimal = document.getElementById("decimal");
decimal.addEventListener("click", displayCalculations);

// Operator buttons
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const operatorBtns = document.getElementsByClassName("operator");
for (i of operatorBtns) {
    i.addEventListener("click", storeOperator);
}

// Display
const calculations = document.getElementById("calculations");
const calculated = document.getElementById("calculated");
calculations.textContent = "0";
calculated.textContent = "0"

// Operate button
const operateBtn = document.getElementById("operate");
operateBtn.addEventListener("click", displayAnswer);

// Clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearDisplay);

// Arithmetic helper variables
let firstOperand;
let secondOperand;
let operator;
let solution;
let calculationArray;