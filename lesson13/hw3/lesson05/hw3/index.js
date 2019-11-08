export const increaser = (a, index) => {
    if (a > index) {
        return a += index;
    } else {
        return a;
    }
}