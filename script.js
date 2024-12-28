// Variables for storing the calculator operation
let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';
let newNumberFlag = false;

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

// Function to update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

// Function to handle digit input
function inputDigit(digit) {
    if (newNumberFlag) {
        displayValue = digit;
        newNumberFlag = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
}

// Function to handle operator input
function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstNumber === '') {
        firstNumber = inputValue;
    } else if (operator) {
        const result = operate(operator, firstNumber, inputValue);
        displayValue = String(result);
        firstNumber = result;
        updateDisplay();
    }

    newNumberFlag = true;
    operator = nextOperator;
}

// Function to handle equals
function handleEquals() {
    if (firstNumber === '' || !operator) return;

    const inputValue = parseFloat(displayValue);
    const result = operate(operator, firstNumber, inputValue);
    
    displayValue = String(result);
    updateDisplay();

    // Reset everything
    firstNumber = '';
    operator = '';
    newNumberFlag = true;
}

// Function to clear calculator
function clearCalculator() {
    displayValue = '0';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    newNumberFlag = false;
    updateDisplay();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for digits
    document.querySelectorAll('.buttons button:not(.operator):not(.equals):not(.clear)').forEach(button => {
        button.addEventListener('click', (e) => {
            inputDigit(e.target.textContent);
        });
    });

    // Add event listeners for operators
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', (e) => {
            handleOperator(e.target.textContent);
        });
    });

    // Add event listener for equals
    document.querySelector('.equals').addEventListener('click', handleEquals);

    // Add event listener for clear
    document.querySelector('.clear').addEventListener('click', clearCalculator);

    // Initialize display
    updateDisplay();
});
