// Variables for storing the calculator operation
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Basic math functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return Number(a) / Number(b);
}

// Function to perform the calculation based on the operator
function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

// Test functions
console.log("Testing calculator functions:");
console.log("Addition: 5 + 3 =", operate('+', 5, 3));
console.log("Subtraction: 10 - 4 =", operate('-', 10, 4));
console.log("Multiplication: 6 * 7 =", operate('*', 6, 7));
console.log("Division: 15 / 3 =", operate('/', 15, 3));
console.log("Division by zero:", operate('/', 5, 0));
