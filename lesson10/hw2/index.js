const getRandomNumbers = (arrayLength, from, to) => {
    if (from > to || (to - from) < 1) return null;
    const min = Math.ceil(from);
    // console.log(min);
    const max = Math.floor(to);
    // console.log(max);
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.trunc((Math.random() * ((max + 1) - min) + min)));
    }
    return array;
}

// console.log(getRandomNumbers(20, -5.568, 10.999));
