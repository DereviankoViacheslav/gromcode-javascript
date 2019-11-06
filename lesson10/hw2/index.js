const getRandomNumbers = (arrayLength, from, to) => {
    if (((Math.trunc(from) === Math.trunc(to)) && (from > 0 && to > 0 || from < 0 && to < 0)) ||
        from > to) return null;
    return Array(arrayLength)
        .fill()
        .map(el => Math.trunc((Math.random() * (to - from) + from)));
}

// console.log(getRandomNumbers(20, -5.568, 10.999));
// console.log(getRandomNumbers(100, -0.1, 0.1));
// console.log(getRandomNumbers(100, 0.1, 0.9));
// console.log(getRandomNumbers(100, -0.1, -0.9));