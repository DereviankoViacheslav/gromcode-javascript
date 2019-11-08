const getMaxAbsoluteNumber = array => {
    if (!Array.isArray(array) || array.length === 0) return null;
    const tmpArray = array.map(el => Math.abs(el));
    return Math.max(...tmpArray);
};
