import { getCustomersList } from './index';

it('should get result array', () => {
    const result = getCustomersList( {
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
    });
    
    expect(result).toEqual([
        {
            name: 'Tom',
            age: 17,
            id: 'customer-id-2'
        },     
        {
            name: 'William',
            age: 54,
            id: 'customer-id-1'
        },
    ]);
});

it('should get result array', () => {
    const result = getCustomersList({});
    
    expect(result).toEqual([]);
});

it('should get result array', () => {
    const result = getCustomersList({
        'customer-id-1': {},
        'customer-id-2': {},
    });
    
    expect(result).toEqual([
        {
            id: 'customer-id-1'
        },     
        {
            id: 'customer-id-2'
        },
    ]);
});
