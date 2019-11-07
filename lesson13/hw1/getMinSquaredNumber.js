export default array => {
    if (!Array.isArray(array) || array.length < 1) return null;
    let min = Math.abs(array[0]);
    for (const el of array) {
        if (min > Math.abs(el)) min = Math.abs(el);
    }
    return min * min;
}
