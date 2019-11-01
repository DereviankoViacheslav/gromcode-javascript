function sortAsc(arrayNumbers) {
    if (!Array.isArray(arrayNumbers)) return null;

    const [...array] = arrayNumbers;
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                max = array[j];
                array[j] = array[j + 1];
                array[j + 1] = max;
            }
        }
    }

    return array;
}

function sortDesc(arrayNumbers) {
    if (!Array.isArray(arrayNumbers)) return null;
    
    const [...array] = arrayNumbers;
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                max = array[j];
                array[j] = array[j + 1];
                array[j + 1] = max;
            }
        }
    }

    return array;
}
