const flatArray = array => array.reduce((acc, elem) => {
    return acc.concat(elem);
}, []);
