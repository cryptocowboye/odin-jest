const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./funcs.js')

test('capitalize a word', () => {
    expect(capitalize("spongebob")).toBe("Spongebob")
    expect(capitalize('fRaNkLiN')).toBe('Franklin')
    expect(capitalize('OLYMPIAN')).toBe('Olympian')
})


test('reverse a string', () => {
    expect(reverseString('spongebob')).toBe('bobegnops')
    expect(reverseString('Burgers and Wings')).toBe('sgniW dna sregruB')
})


test('calculate numbers', () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.subtract(58, 8)).toBe(50)
    expect(calculator.multiply(10, 10)).toBe(100)
    expect(calculator.divide(50, 2)).toBe(25)
})


test('cipher strings', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
    expect(caesarCipher('mnop', 2)).toBe('opqr')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('aBC',1)).toBe('bCD')
    expect(caesarCipher('xYZ', 3)).toBe('aBC')
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!')
})

test('analayze an array and create an object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({average: 3, min: 1, max: 5, length: 5})
})