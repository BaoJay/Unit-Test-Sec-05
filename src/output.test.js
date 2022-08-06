import { it, expect, describe } from 'vitest'
import { generateResult } from './output.js'

describe('generateResult()', () => {
    it('should return a string, with any values passed in', () => {
        const val1 = 1;
        const val2 = 'invalid string';
        const val3 = true;

        const result1 = generateResult(val1);
        const result2 = generateResult(val2);
        const result3 = generateResult(val3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    })
})

// describe('outputResult()', () => {

// })