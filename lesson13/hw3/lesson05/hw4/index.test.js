import { compareSums } from './index';

it('should get false', () => {
    const result = compareSums(0, 0, 0, 0);

    expect(result).toEqual(false);
});

it('should get false', () => {
    const result = compareSums(-10, 10, 10, -10);
    
    expect(result).toEqual(false);
});

it('should get false', () => {
    const result = compareSums(-10, 0, 0, 10);

    expect(result).toEqual(false);
});
