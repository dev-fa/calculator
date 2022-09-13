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
        firstOperand = parseInt(calculationArray[0]);
        operator = this.textContent;
    } else {
        if (calculationArray[1] !== undefined) {
            displayAnswer();
            calculations.textContent += this.textContent;
            operator = this.textContent;
        } else {
            firstOperand = parseInt(calculationArray[0]);
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
    secondOperand = parseInt(calculationArray[1]);

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
            calculatedAnswer = operate("/", firstOperand, secondOperand);
            break;
    }

    calculated.textContent = calculatedAnswer;
    calculations.textContent = calculatedAnswer;
    firstOperand = calculatedAnswer;
    secondOperand = undefined;
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
calculations.textContent = "0";
const calculated = document.getElementById("calculated");

// Operate button
const operateBtn = document.getElementById("operate");
operateBtn.addEventListener("click", displayAnswer);

// Arithmetic helper variables
let firstOperand;
let secondOperand;
let operator;
let solution;
let calculationArray;