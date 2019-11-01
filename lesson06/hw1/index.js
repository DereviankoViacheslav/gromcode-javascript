function squareElements(array) {
    if (!Array.isArray(array)) return null;

    const result = [];

    for (const item of array) {
        result.push(item * item);
    }

    return result;
}
