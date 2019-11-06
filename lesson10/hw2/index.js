const getRandomNumbers = (arrayLength, from, to) => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.trunc((Math.random() * (to - from) + from)));
    }
    return array;
}
