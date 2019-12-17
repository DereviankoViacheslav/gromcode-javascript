// const asyncNumber1 = getValueWithDelay(24, 1000);
// const asyncNumber2 = getValueWithDelay(undefined, 2000);
// const asyncNumber3 = Promise.reject(new Error('err'));
// const asyncNumber4 = getValueWithDelay('15', 4000);
// const asyncNumber5 = getValueWithDelay(10, 5000);

// asyncSum(asyncNumber1, asyncNumber2, asyncNumber3, asyncNumber4, asyncNumber5)
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
        .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

function getSum(numbers) {
    return numbers
        .filter(elem => !isNaN(elem))
        .reduce((acc, elem) => acc + Number(elem), 0);
};

export { asyncSum };
