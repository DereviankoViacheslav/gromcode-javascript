import { findDivCount } from './index';

it('should get zero', () => {
    const result = findDivCount(0, 0, 0);
    console.log(result);
    
    expect(result).toEqual(0);
});

it('should get zero', () => {
    const result = findDivCount(10, 20, 0);
    console.log(result);
    console.log(10 % 0);
    
    expect(result).toEqual(0);
});

it('should get zero', () => {
    const result = findDivCount(1, 5, 1);
    console.log(result);

    expect(result).toEqual(0);
});
