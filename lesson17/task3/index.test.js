import { defer } from './index';

it('should get function', () => {
    const result = typeof defer(() => null, 1000) === 'function';

    expect(result).toEqual(true);
})
