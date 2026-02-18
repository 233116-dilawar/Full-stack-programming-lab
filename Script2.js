function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    let result;
    let errorMessage = '';

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        errorMessage = 'Please enter valid numbers in both fields!';
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('result').textContent = 'Error';
        document.getElementById('result-box').className = 'result-box error';
        return;
    }

    // Perform calculation based on operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorMessage = 'Error: Cannot divide by zero!';
                document.getElementById('error-message').textContent = errorMessage;
                document.getElementById('result').textContent = '∞';
                document.getElementById('result-box').className = 'result-box error';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 0;
    }

    // Display result
    document.getElementById('result').textContent = result.toFixed(2);

    // Change background color based on result value (Bonus feature)
    const resultBox = document.getElementById('result-box');
    if (result > 0) {
        resultBox.className = 'result-box positive';
    } else if (result < 0) {
        resultBox.className = 'result-box negative';
    } else {
        resultBox.className = 'result-box';
    }

    // Clear error message
    document.getElementById('error-message').textContent = '';

    // Show confirmation using BOM
    alert(`Calculation complete! Result: ${result.toFixed(2)}`);
}