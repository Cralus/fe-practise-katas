
const { validTriangles } = require('./triangleKata')

describe('validTriangles test', () => {
    test('should return 0 if the length of array is given an empty array', () => {
        expect(validTriangles([[]])).toBe(0)
    });
    test('should return 1 if past an array with an array of one valid triangle within it', () => {
        expect(validTriangles([[2, 3, 4]])).toBe(1)
    });
    test('should return 2 if passed an array of two valid triangles', () => {
        expect(validTriangles([[2, 3, 4], [3, 4, 5]])).toBe(2)
    });
    test('should return the number of valid triangles when given an array of both valid and invalid traingles', () => {
        expect(validTriangles([
            [5, 10, 25],
            [5, 4, 5]
          ])).toBe(1)
       expect(validTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419]
      ])).toBe(2)
    });
});