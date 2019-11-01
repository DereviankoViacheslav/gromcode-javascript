function reveseArray(array) {
    if (!Array.isArray(array)) return null;

    const result = [];

    for (const item of array) {
        result.unshift(item);
    }

    return result;
}

// console.log(reveseArray([1, 2, 3, 4, 5]));
