const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function studentsBirthDays(students) {
    const arrStudents = students.slice();
    return arrStudents
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .reduce((acc, { name, birthDate }) => {
            const nameMonth = MONTHS[new Date(birthDate).getMonth()];
            if (acc[nameMonth] === undefined) acc[nameMonth] = [];
            acc[nameMonth].push(name);
            return acc;
        }, {});
};

// const arrStudents = [{
//         name: 'Tom',
//         birthDate: '05/15/2015',
//     },
//     {
//         name: 'Bob',
//         birthDate: '01/01/2013',
//     },
//     {
//         name: 'Jeck',
//         birthDate: '05/05/2011',
//     },
//     {
//         name: 'Anna',
//         birthDate: '12/19/2008',
//     },
//     {
//         name: 'Nick',
//         birthDate: '01/25/2009',
//     },
//     {
//         name: 'Lusy',
//         birthDate: '12/29/2012',
//     },
//     {
//         name: 'Sam',
//         birthDate: '07/29/2012',
//     },
//     {
//         name: 'Ben',
//         birthDate: '07/07/2012',
//     },
// ];

// console.log(studentsBirthDays(arrStudents));

export { studentsBirthDays };