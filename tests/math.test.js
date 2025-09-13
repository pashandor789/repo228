const { add, multiply, divide } = require('../index');

describe('Математические функции', () => {
    describe('add', () => {
        test('должна правильно складывать два положительных числа', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('должна правильно складывать отрицательные числа', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('должна правильно складывать положительное и отрицательное число', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('должна правильно работать с нулем', () => {
            expect(add(0, 5)).toBe(5);
            expect(add(5, 0)).toBe(5);
        });

        test('должна правильно работать с дробными числами', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });

    describe('multiply', () => {
        test('должна правильно умножать два положительных числа', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('должна правильно умножать на ноль', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('должна правильно умножать отрицательные числа', () => {
            expect(multiply(-2, -3)).toBe(6);
            expect(multiply(-2, 3)).toBe(-6);
        });

        test('должна правильно работать с дробными числами', () => {
            expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
        });
    });

    describe('divide', () => {
        test('должна правильно делить два положительных числа', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('должна правильно делить отрицательные числа', () => {
            expect(divide(-10, -2)).toBe(5);
            expect(divide(-10, 2)).toBe(-5);
        });

        test('должна выбрасывать ошибку при делении на ноль', () => {
            expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
        });

        test('должна правильно работать с дробными числами', () => {
            expect(divide(1, 3)).toBeCloseTo(0.333333);
        });

        test('должна возвращать ноль при делении нуля', () => {
            expect(divide(0, 5)).toBe(0);
        });
    });
});
