import { validateInput } from './util/validation.js'

export function add(numbers) {
  let sum = 0;

  // throw new Error('Something went wrong!')
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberInputs) {
  let result = '';
  try {
    // return an array of numbers
    const numbers = validateInput(numberInputs);
    result = add(numbers).toString();

  } catch (error) {
    result = error.message;
  }
  return result;
}