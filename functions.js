export function capitalize(str) {
    let givenStr = str
    givenStr = givenStr.charAt(0).toUpperCase() + givenStr.slice(1)

    return givenStr
}

export function reverseString(str) {
    let givenStr = str
    givenStr = givenStr.split('').reverse().join('')
    
    return givenStr
}

export class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

export function analyzeArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Input should be a non-empty array");
    }

    let sum = array.reduce((a, b) => a + b, 0);
    let average = sum / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;

    return {
        average,
        min,
        max,
        length
    };
}