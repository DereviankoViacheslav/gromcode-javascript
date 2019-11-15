import { createArrayOfFunctions } from './index';

it('should get []', () => {
    const array = createArrayOfFunctions();

    expect(array).toEqual([]);
})

it('should get null', () => {
    const array = createArrayOfFunctions('');

    expect(array).toEqual(null);
})

it('should get 0', () => {
    const result = createArrayOfFunctions(1)[0]();

    expect(result).toEqual(0);
})

it('should get 24', () => {
    const result = createArrayOfFunctions(25)[24]();

    expect(result).toEqual(24);
})