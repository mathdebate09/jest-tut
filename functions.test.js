import { capitalize, reverseString, Calculator } from './functions.js'
let calc = new Calculator();

// capitalize tests
test('itsme to Itsme', () => {
    expect(capitalize("itsme")).toBe("Itsme");
});

test('hi, there to Hi, there', () => {
    expect(capitalize("hi, there")).toBe("Hi, there");
});

test('(empty string) to (empty string)', () => {
    expect(capitalize("")).toBe("")
});

//reversedString tests
test('iRReGuLaRsTr to rTsRaLuGeRRi', () => {
    expect(reverseString("iRReGuLaRsTr")).toBe("rTsRaLuGeRRi")
});

test('hi, there to ereht ,ih', () => {
    expect(reverseString("hi, there")).toBe("ereht ,ih")
});

test('(empty string) to (empty string)', () => {
    expect(reverseString("")).toBe("")
});

//calculator tests
test('1 + 1 equals 2', () => {
    expect(calc.add(1,1)).toBe(2)
})

test('1 - 1 equals 0', () => {
    expect(calc.subtract(1,1)).toBe(0)
})

test('3 x 6 equals 18', () => {
    expect(calc.multiply(3,6)).toBe(18)
})

test('10 / 5 equals 2', () => {
    expect(calc.divide(10,5)).toBe(2)
})

test('10 / 0 throws Error', () => {
    expect(() => calc.divide(10,0)).toThrow("Cannot divide by zero");
})

//analyzerArray tests
import { analyzeArray } from './functions.js';

test('analyze [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('analyze [5,5,5,5,5]', () => {
    expect(analyzeArray([5,5,5,5,5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 5
    });
});

test('analyze [-1,0,1]', () => {
    expect(analyzeArray([-1,0,1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3
    });
});

test('analyze empty array throws Error', () => {
    expect(() => analyzeArray([])).toThrow("Input should be a non-empty array");
});