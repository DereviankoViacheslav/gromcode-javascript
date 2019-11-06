const getMaxAbsoluteNumber = array => {
    const tmpArray = array.map(el => Math.abs(el));
    return Math.max(...tmpArray);
};
