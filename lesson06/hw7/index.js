function checker(array) {
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    if (max + min > 1000) {
        return true;
    } else {
        return false;
    }
}
