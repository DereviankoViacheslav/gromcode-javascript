import { getOwnProps } from './index';

it('should get ["name"]', () => {
    const obj = {
        name: 'abc',
        getName() {
            return this.name;
        },
    };
    const result = getOwnProps(obj);

    expect(result).toEqual(['name']);
})

it('should get []', () => {
    const result = getOwnProps({});

    expect(result).toEqual([]);
})

it('should get []', () => {
    const result = getOwnProps(null);

    expect(result).toEqual([]);
})
