const validateValue = require('./validateValue');

// npm run test validateValue.test.js
// test specific file

// describe to unit several tests
describe('validateValue', () => {
    test('Валидация значения в интервале от 0 до 100', () => {
        expect(validateValue(70)).toBe(true);
    })
    test('Валидация отрицательного значения', () => {
        expect(validateValue(-100)).toBe(false);
    })
    test('Валидация значения = 100', () => {
        expect(validateValue(100)).toBe(true);
    })
    test('Валидация значения = 0', () => {
        expect(validateValue(0)).toBe(true);
    })
})