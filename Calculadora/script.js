const input = document.querySelector('#inputText');
let textValue = '';

function addNumber(number) {
    textValue += number;
    updateDisplay();
}

function addOperator(operator) {
    if (textValue === '' || isOperator(textValue.slice(-1))) return;
    textValue += operator;
    updateDisplay();
}

function addDecimal() {
    const lastChar = textValue.slice(-1);
    if (lastChar === '.' || isOperator(lastChar)) return;

    const lastNumber = textValue.split(/[\+\-\*\/\%]/).pop();
    if (!lastNumber.includes('.')) {
        textValue += '.';
        updateDisplay();
    }
}

function delText() {
    textValue = textValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        if (textValue === '' || isOperator(textValue.slice(-1))) return;
        const result = eval(textValue);
        textValue = result.toString();
        updateDisplay();
    } catch (error) {
        input.value = 'ERROR';
        textValue = '';
    }
}

function updateDisplay() {
    input.value = textValue;
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}