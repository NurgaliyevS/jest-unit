const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test("Преобразования массива чисел [1, 2, 3] в массив строк ['1', '2', '3']", () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test("Преобразования массива чисел и ерунды [1, 2, 3, null, undefined, something] в массив строк ['1', '2', '3']", () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, "something"])).toEqual(['1', '2', '3']);
    })
    test("Пустой массив", () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test("Отрицание", () => {
        expect(mapArrToStrings([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4]);
    })
})