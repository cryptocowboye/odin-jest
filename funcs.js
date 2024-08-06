function capitalize(str) {
    let newStr = str.toLowerCase().split("").map((letter) => {
        if (letter === str[0].toLowerCase()) {
            return letter.toUpperCase()
        } else {
            return letter
        }
    })

    return newStr.join("")
}

function reverseString(str) {
    const strArr = str.split('');
    const reverseArr = []

    for (let i = strArr.length - 1; i >= 0; i--) {
        reverseArr.push(strArr[i]);
    }

    return reverseArr.join("")
}

class Calculator {

    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        return a / b
    }
}

function greaterThanLimit(str, num, alphabet, i) {
    const leftover = (alphabet.indexOf(str[i].toLowerCase()) + num) - 26
    if (str[i] === str[i].toUpperCase()) {
        return alphabet[leftover].toUpperCase()
    } else {
        return alphabet[leftover]
    }
}

function withinLimit (str, num, alphabet, i) {
    if (str[i] === str[i].toUpperCase()) {
        return alphabet[alphabet.indexOf(str[i].toLowerCase()) + num].toUpperCase()
    } else {
        return alphabet[alphabet.indexOf(str[i].toLowerCase()) + num]
    }
}

function caesarCipher(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    let result = []

    for (let i = 0; i < str.length; i++) {
        if (!alphabet.includes(str[i].toLowerCase())) {
            result.push(str[i])
        } else if ((alphabet.indexOf(str[i].toLowerCase()) + num) > 25) {
            result.push(greaterThanLimit(str, num, alphabet, i))
        } else {
            result.push(withinLimit(str, num, alphabet, i))
        }
    }

    return result.join("")
}

function average (arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i]
    }

    return num / arr.length
}

function minmax(arr, max=false) {
    let num = null
    for (let i = 0; i < arr.length; i++) {
        if (num === null) {
            num = arr[i]
        } else if (arr[i] < num && max === false) {
            num = arr[i]
        } else if (arr[i] > num && max === true) {
            num = arr[i]
        }
    }

    return num
}

function analyzeArray(arr) {
    const obj = {
        average: average(arr),
        min: minmax(arr),
        max: minmax(arr, true),
        length: arr.length
    }

    return obj
}

const calculator = new Calculator()

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}