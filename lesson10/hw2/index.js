const getRandomNumbers = (arrayLength, from, to) => {
    if (from > to) return null;
    // const min = Math.ceil(from);
    // const max = Math.floor(to);
    const array = Array(arrayLength).fill();
    return array.map(el => Math.trunc((Math.random() * (to - from) + from)));
    // return array.map(el => Math.trunc((Math.random() * ((max + 1) - min) + min)));
}

// console.log(getRandomNumbers(20, -5.568, 10.999));
// console.log(getRandomNumbers(100, -0.1, 0.1));
