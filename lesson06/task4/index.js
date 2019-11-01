function swap(array) {
    const [first, ...rest] = array;
    return [...rest, first];
}
