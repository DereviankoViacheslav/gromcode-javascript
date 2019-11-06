const getRandomNumbers = (arrayLength, from, to) => {
    if (from > to || (to - from) < 1) return null;
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.trunc((Math.random() * (to - from) + from)));
    }
    return array;
}
