import { studentsBirthDays } from './index'

const arrStudents = [{
        name: 'Tom',
        birthDate: '05/15/2015',
    },
    {
        name: 'Bob',
        birthDate: '01/01/2013',
    },
    {
        name: 'Jeck',
        birthDate: '05/05/2011',
    },
    {
        name: 'Anna',
        birthDate: '12/19/2008',
    },
    {
        name: 'Nick',
        birthDate: '01/25/2009',
    },
    {
        name: 'Lusy',
        birthDate: '12/29/2012',
    },
];

it('should get typeof object', () => {
    const result = studentsBirthDays(arrStudents);

    expect(typeof result).toEqual('object');
});

it('should get {}', () => {
    const result = studentsBirthDays([]);

    expect(result).toEqual({});
});


it('should get {}', () => {
    const result = studentsBirthDays(arrStudents);
    const resultObj = {
        Jan: ['Bob', 'Nick'],
        Dec: ['Anna', 'Lusy'],
        May: ['Jeck', 'Tom'],
    };

    expect(result).toEqual(resultObj);
});