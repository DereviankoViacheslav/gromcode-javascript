const transformToObject = array => {
    const obj = {};
    for (const elem of array) {
        obj[elem] = elem;
    }
    return obj;
}
