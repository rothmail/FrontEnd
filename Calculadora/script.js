let input = querySelector('#inputText');
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
    textValue = ' ';
    upText();
}

function upText() {
    input.value = textValue;
}