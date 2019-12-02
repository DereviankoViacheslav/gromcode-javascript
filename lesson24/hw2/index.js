const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function studentsBirthDays(students) {
    const arrStudents = students.slice();
    const result = {};
    arrStudents
        .sort((a, b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
        .map(elem => {
            const nameMonth = MONTHS[new Date(elem.birthDay).getMonth()];
            if (result[nameMonth] === undefined) result[nameMonth] = [];
            result[nameMonth].push(elem.name);
        });
    return result;
};

export { studentsBirthDays };
