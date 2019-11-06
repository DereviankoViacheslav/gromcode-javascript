const getRandomNumbers = (arrayLength, from, to) => {
    if (from > to || (to - from) < 1) return null;
    const min = Math.ceil(from);
    const max = Math.floor(to);
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.trunc((Math.random() * (max - min) + min + 1)));
    }
    return array;
}

// console.log(getRandomNumbers(20, -5.568, 10.999));
