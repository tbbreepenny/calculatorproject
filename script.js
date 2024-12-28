// Variables for storing the calculator operation
let firstNumber = '';
let operator = '';
let displayValue = '0';
let newNumberFlag = false;
let lastButtonWasOperator = false;

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
        return "Nice try! 🙄";
    }
    return Number(a) / Number(b);
}

// Function to round long decimal numbers
function roundResult(number) {
    if (typeof number === 'string') return number; // For error messages
    const maxDigits = 12; // Adjust based on your display width
    return Number(number.toFixed(maxDigits)).toString();
}

// Function to perform the calculation based on the operator
function operate(operator, a, b) {
    let result;
    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return "Error: Invalid operator";
    }
    return roundResult(result);
}

// Function to update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    // Ensure display value doesn't overflow
    if (displayValue.length > 12) {
        displayValue = Number(displayValue).toExponential(6);
    }
    display.textContent = displayValue;
}

// Function to handle digit input
function inputDigit(digit) {
    if (newNumberFlag) {
        displayValue = digit;
        newNumberFlag = false;
    } else {
        // Prevent numbers from becoming too long
        if (displayValue.replace('.', '').length >= 12) return;
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    lastButtonWasOperator = false;
    updateDisplay();
}

// Function to handle operator input
function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    // Handle consecutive operator presses
    if (lastButtonWasOperator) {
        operator = nextOperator;
        return;
    }

    if (firstNumber === '') {
        firstNumber = inputValue;
    } else if (operator) {
        // Only evaluate if we have both numbers and an operator
        const result = operate(operator, parseFloat(firstNumber), inputValue);
        if (result === "Nice try! 🙄") {
            displayValue = result;
            clearCalculator();
            updateDisplay();
            return;
        }
        displayValue = result;
        firstNumber = result;
        updateDisplay();
    }

    newNumberFlag = true;
    operator = nextOperator;
    lastButtonWasOperator = true;
}

// Function to handle equals
function handleEquals() {
    // Don't evaluate if we're missing any required parts
    if (firstNumber === '' || !operator || lastButtonWasOperator) return;

    const inputValue = parseFloat(displayValue);
    const result = operate(operator, parseFloat(firstNumber), inputValue);
    
    if (result === "Nice try! 🙄") {
        displayValue = result;
        clearCalculator();
        updateDisplay();
        return;
    }

    displayValue = result;
    updateDisplay();

    // Reset everything except the display value
    firstNumber = '';
    operator = '';
    newNumberFlag = true;
    lastButtonWasOperator = false;
}

// Function to clear calculator
function clearCalculator() {
    displayValue = '0';
    firstNumber = '';
    operator = '';
    newNumberFlag = false;
    lastButtonWasOperator = false;
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
