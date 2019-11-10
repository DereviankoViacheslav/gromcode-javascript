import { createCalculator } from './index';

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    let result = calculator.getMemo();

    expect(result).toEqual(0);
})

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    calculator.add(25);
    let result = calculator.getMemo();

    expect(result).toEqual(25);
})

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    calculator.add(-25);
    let result = calculator.getMemo();

    expect(result).toEqual(-25);
})

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    calculator.decrease(25);
    let result = calculator.getMemo();

    expect(result).toEqual(-25);
})

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    calculator.decrease(-25);
    let result = calculator.getMemo();

    expect(result).toEqual(25);
})

it('should get result of calculator', () =>  {
    const calculator = createCalculator();
    calculator.add(25);
    calculator.reset();
    let result = calculator.getMemo();

    expect(result).toEqual(0);
})
