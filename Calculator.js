let displayValue = ''; // Current value in the display
let operator = ''; // Operator used for calculation
let firstValue = ''; // First operand


function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}


function appendDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
        updateDisplay();
    }
}


function setOperator(op) {
    if (displayValue === '') return; // Prevent setting an operator without a number
    if (operator !== '') calculate(); // Calculate if there's already an operator
    operator = op;
    firstValue = displayValue;
    displayValue = '';
}


function clearDisplay() {
    displayValue = '';
    operator = '';
    firstValue = '';
    updateDisplay();
}


function updateDisplay() {
    document.getElementById('display').value = displayValue;
}


function calculate() {
    if (firstValue === '' || operator === '' || displayValue === '') return; // Ensure all values are set
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Prevent division by zero
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstValue = '';
    updateDisplay();
}  