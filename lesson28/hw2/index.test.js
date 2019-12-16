import { maxFibonacci } from './index';

it('should get 0', () => {
    const result = maxFibonacci(.1);
    
    expect(result).toEqual(0);
});

it('should get 0', () => {
    const result = maxFibonacci(-999);
    
    expect(result).toEqual(0);
});

it('should get 1', () => {
    const result = maxFibonacci(1);
    
    expect(result).toEqual(1);
});

it('should get 1', () => {
    const result = maxFibonacci(1.9);
    
    expect(result).toEqual(1);
});

it('should get 2', () => {
    const result = maxFibonacci(2.5);
    
    expect(result).toEqual(2);
});

it('should get 13', () => {
    const result = maxFibonacci(15);

    expect(result).toEqual(13);
});

it('should get 17711', () => {
    const result = maxFibonacci(17711);

    expect(result).toEqual(17711);
});
