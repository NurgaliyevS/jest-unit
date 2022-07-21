const square = require("./square");

describe("square", () => {
    // Перед каждым тестом
    beforeEach(() => {
        // ДОБАВИТЬ В БД
    })
    // Один раз перед всеми тестами
    beforeAll(() => {

    })
    test("Корректный вызов метода", () => {
    //     // expect(square(10)).toBe(100);
    //     // expect(square(2)).toBeLessThan(5);
    //     // expect(square(2)).toBeGreaterThan(3);
    //     // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    
    test("Корректный вызов метода, при square === 1", () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
    })
    // Общие действия
    afterAll(() => {})
})