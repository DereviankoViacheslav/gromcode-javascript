import { increaser } from './index';

it('should get number + index', () => {
    const result = increaser(-2, -4);

    expect(result).toEqual(-6);
});

it('should get number + index', () => {
    const result = increaser(0, -4);

    expect(result).toEqual(-4);
});

it('should get zero', () => {
    const result = increaser(4, -4);

    expect(result).toEqual(0);
});
