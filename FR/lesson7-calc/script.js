const display = document.getElementById("display");

function calculatePercentage() {
    const currentValue = parseFloat(display.value);
    const result = currentValue / 100;
    display.value = result;
}

function changeSign() {
    display.value = parseFloat(display.value) * -1;
}

function addToDisplay(value) {
    if (value === 'C') {
        clearDisplay();
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// const display = document.getElementById("display");

// function calculatePercentage() {
//     const expression = display.value.replace('%', '/100');
//     try {
//         const result = Function('return ' + expression)();
//         display.value = result;
//     } catch (error) {
//         display.value = "Error";
//     }
// }

// function addToDisplay(value) {
//     if (value === '%') {
//         calculatePercentage();
//     } else {
//         display.value += value;
//     }
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         const result = Function('return ' + display.value)();
//         display.value = result;
//     } catch (error) {
//         display.value = "Error";
//     }
// }