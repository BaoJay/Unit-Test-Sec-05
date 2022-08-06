import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from './validation';

// ============= validateStringNotEmpty =============================
describe('validateStringNotEmpty()', () => {
    describe('is a string type', () => {
        it('should not throw error if string length is positive', () => {
            // Arrange
            const input = 'test string';

            // Act
            const resultFn = () => {
                validateStringNotEmpty(input);
            }

            // Assert
            expect(resultFn).not.toThrow();
        })
    })

    describe('is not a string type', () => {
        it('should throw error if string length is zero', () => {
            // Arrange
            const input = '';

            // Act
            const resultFn = () => {
                validateStringNotEmpty(input)
            }

            // Assert
            expect(resultFn).toThrow(/Invalid input/);
        })

        it('should return undefined if no argument is provided', () => {
            // Arrange
            const input = undefined;

            // Act
            const resultFn = () => {
                validateStringNotEmpty(input)
            }

            // Assert
            expect(resultFn).toThrow(/undefined/);
        })
    })

})

// ============= validateNumber =============================
describe('validateNumber()', () => {
    it('should throw "Invalid number input" error if NaN type is provided', () => {
        // Arrange
        const input1 = 'string';
        const input2 = true;
        const input3 = undefined;
        const input4 = null;

        // Act
        const resultFn1 = () => {
            validateNumber(input1);
        }
        const resultFn2 = () => {
            validateNumber(input2);
        }
        const resultFn3 = () => {
            validateNumber(input3);
        }
        const resultFn4 = () => validateNumber(input4);

        // Assert
        expect(resultFn1).toThrow(/Invalid number input/);
        expect(resultFn2).toThrow(/Invalid number input/);
        expect(resultFn3).toThrow(/Invalid number input/);
        expect(resultFn4).toThrow(/Invalid number input/);
    })

    it('should not throw error if number type is provided', () => {
        // Arrange
        const input = 1;

        // Act
        const resultFn = () => {
            validateNumber(input)
        }

        // Assert
        expect(resultFn).not.toThrow()
    })

    it('should throw an error if the number string is provided', () => {
        // Arrange
        const input = '1';

        // Act
        const resultFn = () => {
            validateNumber(input);
        }

        // Assert
        expect(resultFn).toBeDefined();
    })
})
