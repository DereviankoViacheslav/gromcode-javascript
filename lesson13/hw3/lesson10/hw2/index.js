const getRandomNumbers = (arrayLength, from, to) => {
    const isWrongRange = to < from;
    const noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);

    if (isWrongRange || noNumbersBetween) return null;

    return Array(arrayLength)
        .fill()
        .map(el => Math.trunc((Math.random() * (to - from) + from)));
}

// console.log(getRandomNumbers(20, -5.568, 10.999));
// console.log(getRandomNumbers(100, -0.1, 0.1));
// console.log(getRandomNumbers(100, 0.1, 0.9));
// console.log(getRandomNumbers(100, -0.1, -0.9));