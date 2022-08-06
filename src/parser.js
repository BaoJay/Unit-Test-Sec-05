export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  // console.log(formData.has('num3'))

  return [num1Input, num2Input];
}

export function transformInput(form) {
  const formData = new FormData(form); // New JS object
  const numberInputs = extractNumbers(formData); // return an array of input numbers
  return numberInputs;
}
