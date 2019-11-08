import { getPeople } from './index';

it('should get result array', () => {
    const result = getPeople({
        room1: [
            { name: 'room1 name1' },
            { name: 'room1 name2' },
        ],
        room2: [
            { name: 'room2 name1' },
            { name: 'room2 name2' },
        ],
    });
    
    expect(result).toEqual(['room1 name1', 'room1 name2', 'room2 name1', 'room2 name2']);
});

it('should get result array', () => {
    const result = getPeople({});
    
    expect(result).toEqual([]);
});

it('should get result array', () => {
    const result = getPeople({
        room1: [],
        room2: [],
    });
    
    expect(result).toEqual([]);
});
