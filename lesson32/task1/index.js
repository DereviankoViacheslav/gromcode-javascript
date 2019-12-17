// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum4 = getValueWithDelay('15', 4000);
// const asyncNum5 = getValueWithDelay(10, 5000);
// const asyncNum6 = getValueWithDelay(25, 6000);
// const asyncNum7 = getValueWithDelay(50, 7000);
// // const asyncNum7 = Promise.reject(new Error('err'));

// asyncSum(asyncNum2, asyncNum4, asyncNum5, asyncNum6, asyncNum7)
//     .then(result => console.log(result));

// function getValueWithDelay(value, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(value);
//             resolve(value)
//         }, delay);
//     });
// };

function asyncSum(...asyncNumbers) {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

function getSum(numbers) {
    return numbers
        .filter(elem => !isNaN(elem))
        .reduce((acc, elem) => acc + Number(elem), 0);
};

export { asyncSum };
