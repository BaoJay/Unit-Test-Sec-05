export function generateResult(resultInput) {
    let resultText = '';
    if (resultInput === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (resultInput !== 'no-calc') {
        resultText = 'Result: ' + resultInput;
    }

    return resultText;
}

export function outputResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText;
}