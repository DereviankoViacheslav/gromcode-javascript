function squareElements(array) {
    if (!Array.isArray(array)) return null;

    let result = [];

    for (const item of array) {
        result.push(item * item);
    }

    return result;
}
