let input = document.querySelector('#inputText');
let textValue = ' ';

function addNumber(number) {
    textValue += number;
    upText();
}

function addOperator(operator) {
    textValue += operator;
    upText();
}

function addDecimal() {
    textValue += '.';
    upText();
}

function delText() {
    textValue = textValue.slice(0, -1);
    upText();
}

function upText() {
    input.value = textValue;
}

function calculate() {
    try {
        textValue = eval(textValue);
        upText();
    } catch (e) {
        input.value = 'ERROR';
    }
}