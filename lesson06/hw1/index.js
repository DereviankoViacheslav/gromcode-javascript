function squareElements(array) {
    if (!Array.isArray(array)) return null;

    const result = [];

    for (let item of array) {
        result.push(item * item);
    }

    return result;
}

// console.log(squareElements([3, 5, 6, 8]));
