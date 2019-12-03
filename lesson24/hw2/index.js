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

export { studentsBirthDays };
