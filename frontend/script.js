let currentInput = '';
const display = document.getElementById('display');

function press(val) {
  currentInput += val;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
} 