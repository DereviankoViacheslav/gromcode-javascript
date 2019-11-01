function removeDuplicates(array) {
    if (!Array.isArray(array)) return null;

    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let isIncluding = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isIncluding = true;
            }
        }
        if (!isIncluding) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}
