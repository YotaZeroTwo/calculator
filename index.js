const input = document.querySelector('.input');

function addValueToInput(newValue) {
  if (input.value.includes('.') && newValue === '.') {
    return;
  }
  if (input.value === '' && newValue === '.') {
    input.value = 0 + newValue;
    return;
  }
  input.value = input.value + newValue;
}

let oldValue;
let operator;

function onOperatorClick(newOperator) {
  if (newOperator === 'CE') {
    oldValue = '';
    operator = '';
    input.value = '';
  }
  oldValue = input.value;
  input.value = '';
  operator = newOperator;
}

function equal() {
  const a = parseFloat(oldValue);
  const b = parseFloat(input.value);
  if (!operator) {
    return;
  }
  if (operator === '+') {
    input.value = a + b;
  }
  if (operator === '-') {
    input.value = a - b;
  }
  if (operator === '/') {
    input.value = a / b;
  }
  if (operator === '*') {
    input.value = a * b;
  }
  operator = '';
  oldValue = '';
}

function square() {
  const a =  parseFloat(input.value);
  input.value = a * a;
}
 
function sqrt() {
  const a =  parseFloat(input.value);
  input.value = Math.sqrt(a);
}


