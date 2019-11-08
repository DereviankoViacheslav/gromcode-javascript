import { squareArray } from './index';

it('should get square numbers array', () => {
    const result = squareArray([-1, -5, -10]);

    expect(result).toEqual([1, 25, 100]);
});

it('should get square numbers array', () => {
    const result = squareArray([0, 0, 0]);

    expect(result).toEqual([0, 0, 0]);
});

it('should get square numbers array', () => {
    const result = squareArray([0.5, 0.5, 0.5]);
    console.log(result);
    expect(result).toEqual([0.25, 0.25, 0.25]);
});
