import { reverseArray } from './index';

it('should get reversed array', () => {
    const result = reverseArray([-1, -5, -10]);
    
    expect(result).toEqual([-10, -5, -1]);
});

it('should get null', () => {
    const result = reverseArray('');
    
    expect(result).toEqual(null);
});

it('should get square numbers array', () => {
    const result = reverseArray([1, 2, 3, 4]);
    
    expect(result).toEqual([4, 3, 2, 1]);
});
