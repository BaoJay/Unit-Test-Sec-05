import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it("should return a number if a number string is provided", () => {
    // Arrange
    const input = '1';

    // Act
    const result = transformToNumber(input);

    // Assert
    // const expectedResult = 1;
    expect(result).toBe(+input);
})

it("should return a number type if a number string is provided", () => {
    // Arrange

    const input = '1';

    // Act
    const result = transformToNumber(input);

    // Assert
    // const expectedResult = 1;
    expect(result).toBeTypeOf('number');
})

it("should return NaN if a string is provided", () => {
    // Arrange
    const input = 'hello';
    const input2 = {};

    // Act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    // Assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
})

it('should not to throw if no argument is provided', () => {
    // Arrange
    // const input = undefined;

    // Act
    const resultFn = () => {
        transformToNumber();
    }

    // Assert
    expect(resultFn).not.toThrow();
})

it('should not undefined if undefined is provided', () => {
    // Arrange
    const input = undefined;

    // Act
    // const resultFn = () => {
    const result = transformToNumber(input);
    // }

    // Assert
    expect(result).toBeNaN();
})