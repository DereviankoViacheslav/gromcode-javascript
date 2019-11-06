const getRandomNumbers = (arrayLength, from, to) => {
    if (from > to || (to - from) < 1) return null;
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.round((Math.random() * (to - from) + from + 1)));
    }
    return array;
}

// console.log(getRandomNumbers(20, -5.568, 10));
