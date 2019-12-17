function asyncCalculator(numbr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Initial value: ${numbr}`);
            resolve(numbr);
        }, 500);
    })
    .then(value => new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 500);
    }))
    .then(value => new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = value * 2;
            console.log(`Doubled value: ${result}`);
            resolve(result);
        }, 500);
    }))
};

export { asyncCalculator };
