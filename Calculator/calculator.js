let display = document.getElementById('display');
let currentValue = '0';

function clearDisplay() {
    currentValue = '0';
    display.textContent = currentValue;
}

function appendSymbol(symbol) {
    if (currentValue === '0' && symbol !== '.') {
        currentValue = symbol;
    } else {
        currentValue += symbol;
    }
    display.textContent = currentValue;
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === '') {
        currentValue = '0';
    }
    display.textContent = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
    } catch (error) {
        display.textContent = 'Error';
    }
}
