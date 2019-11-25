import { user } from './index';

it('should get string', () => {
    const result = typeof user.getFullName() === 'string';

    expect(result).toEqual(true);
})

it('should get fullName', () => {
    const fullName = 'adc def';
    user.setFullName(fullName);

    expect(user.getFullName()).toEqual(fullName);
})

it('should get undefined', () => {
    user.setFullName('');

    expect(user.getFullName()).toEqual(undefined);
})
