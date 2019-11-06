const getTotalPrice = array => {
    return '$' + (Math.floor(array.reduce((acc, el) => acc + el) * 100) / 100);
}
