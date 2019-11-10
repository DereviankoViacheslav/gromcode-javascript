import { makeCounter } from './index';

it('should get result of counter', () => {
    const counter = makeCounter();
    let result = counter();
    
    expect(result).toEqual(0);
});

it('should get result of counter', () => {
    const counter = makeCounter();
    counter();
    let result = counter();
    
    expect(result).toEqual(1);
});

it('should get result of counter', () => {
    const counter = makeCounter();
    counter();
    counter();
    let result = counter();
    expect(result).toEqual(2);
});
