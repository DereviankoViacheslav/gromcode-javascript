function makeCounter() {
    let counter = 0;

    return function () {
        return counter++;
    }
}

export { makeCounter };