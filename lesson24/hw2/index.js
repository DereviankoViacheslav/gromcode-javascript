const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function studentsBirthDays(students) {
    const arrStudents = students.slice();
    const result = {};
    arrStudents
        // .sort((a, b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
        .sort((a, b) => new Date(a.birthDay) - new Date(b.birthDay))
        .map(elem => {
            const nameMonth = MONTHS[new Date(elem.birthDay).getMonth()];
            if (result[nameMonth] === undefined) result[nameMonth] = [];
            result[nameMonth].push(elem.name);
        });
    console.log(arrStudents);
    return result;
};

const arrStudents = [{
        name: 'Tom',
        birthDay: '05/15/2015',
    },
    {
        name: 'Bob',
        birthDay: '01/01/2013',
    },
    {
        name: 'Jeck',
        birthDay: '05/05/2011',
    },
    {
        name: 'Anna',
        birthDay: '12/19/2008',
    },
    {
        name: 'Nick',
        birthDay: '01/25/2009',
    },
    {
        name: 'Lusy',
        birthDay: '12/29/2012',
    },
    {
        name: 'Lusy2',
        birthDay: '07/29/2012',
    },
    {
        name: 'Lusy3',
        birthDay: '07/07/2012',
    },
    {
        name: 'Lusy4',
        birthDay: '12/28/2012',
    },
    {
        name: 'Lusy5',
        birthDay: '11/29/2012',
    },
    {
        name: 'Lusy6',
        birthDay: '11/28/2012',
    },
];

console.log(studentsBirthDays(arrStudents));

export { studentsBirthDays };