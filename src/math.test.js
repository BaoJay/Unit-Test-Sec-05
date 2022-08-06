import { expect, it } from 'vitest';
import { add } from './math'

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 4, 5];


    // Act
    const result = add(numbers)

    // Assert
    const expectedResult = numbers.reduce((prevValue, nextValue) => prevValue + nextValue, 0)
    expect(result).toBe(expectedResult);
})

it('two plus two is four', () => {
    const result = add([2, 2])
    expect(result).toBe(4);
})

it('three plus five is eight', () => {
    const result = add([1, 5])
    expect(result).toBe(6);
})

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['stringNumber', 23];

    const result = add(inputs);

    expect(result).toBeNaN();
})

it('shoule return a sum if a numberic string is provided', () => {
    // Arrange
    const inputs = ['2', '4'];

    // Act
    const result = add(inputs);

    // Assert
    const expectedResult = inputs.reduce((sum, input) => +sum + +input, 0);
    expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provided', () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
})

it('should throw an error if no value is passed into the function', () => {
    // define a function that check the inner-function we want to check
    const resultFn = () => {
        add(); // function with statement you want to check
    }

    // If this test passed -> we have an actual error
    expect(resultFn).toThrow(/numbers is not iterable/);
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const checkingFn = () => {
        add(num1, num2); // function with statement you want to check
    }

    // if we want the exact "is not iterable" error to be thrown
    // pass the RegExp argument like this
    expect(checkingFn).toThrow(/numbers is not iterable/);
})

it('still runs with multiple arguments if the first one is an array', () => {
    const arg1 = [1, 2];
    const arg2 = 2;
    const arg3 = 3;

    const resultFn = () => {
        add(arg1, arg2, arg3);
    }

    expect(resultFn).not.toThrow(/numbers is not iterable/);
})