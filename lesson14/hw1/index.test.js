import { add, decrease, reset, getMemo } from './index';

it('should get sum', () => {
    add(5)
    const result = getMemo();
    
    expect(result).toEqual(5);
});

it('should get sum', () => {
    add(-25)
    const result = getMemo();
    
    expect(result).toEqual(-20);
});

it('should get sum', () => {
    add(0)
    const result = getMemo();
    
    expect(result).toEqual(-20);
});

it('should get memo', () => {
    const result = getMemo();

    expect(result).toEqual(-20);
});

it('should get zero', () => {
    reset()
    const result = getMemo();

    expect(result).toEqual(0);
});

it('should get -5', () => {
    decrease(5)
    const result = getMemo();

    expect(result).toEqual(-5);
});

it('should get 20', () => {
    decrease(-25)
    const result = getMemo();

    expect(result).toEqual(20);
});

it('should get 20', () => {
    decrease(0)
    const result = getMemo();

    expect(result).toEqual(20);
});
