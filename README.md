# JavaScript Calculator

A fully functional calculator built with vanilla JavaScript, HTML, and CSS. This calculator supports basic arithmetic operations, keyboard input, decimal numbers, and includes features like backspace and clear functions.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal number support
- Backspace functionality to correct mistakes
- Keyboard support for all operations
- Error handling for division by zero
- Prevents common calculator bugs like multiple decimal points
- Responsive design

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Installation and Setup

1. Clone this repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd calculator
```

3. Open `index.html` in your web browser

## Usage

### Mouse Controls
- Click number buttons (0-9) to input numbers
- Click operator buttons (+, -, ×, ÷) to perform operations
- Click "." to input decimal numbers
- Click "C" to clear all inputs
- Click "⌫" to delete the last input
- Click "=" to see the result

### Keyboard Controls
- Numbers: `0-9`
- Operators: `+`, `-`, `*`, `/`
- Equals: `Enter` or `=`
- Clear: `c` or `Escape`
- Decimal: `.`
- Backspace: `Backspace`

## Features in Detail

### Error Handling
- Prevents division by zero with a snarky error message
- Disables decimal button when a decimal is already present
- Prevents overflow with number length restrictions
- Handles edge cases like multiple operator presses

### Calculator Logic
- Evaluates one pair of numbers at a time
- Chains operations properly
- Rounds long decimal results to prevent display overflow
- Maintains operation state between calculations

## File Structure

```
calculator/
│
├── index.html
├── styles.css
└── script.js
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request


## Acknowledgments

- Project inspired by The Odin Project
