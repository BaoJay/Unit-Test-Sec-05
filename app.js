import { transformInput } from './src/parser.js'
import { calculateResult } from './src/math.js';
import { outputResult, generateResult } from './src/output.js'

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  // 1. Read & transform input
  const numberInputs = transformInput(form);

  // 2. Validate & calculate input
  const result = calculateResult(numberInputs);

  // 4. Take the output text
  const resultText = generateResult(result);

  // 5. Print the output in the DOM
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
