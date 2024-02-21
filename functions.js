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