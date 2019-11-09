let result = 0;

export function add(num) {
    result += num;
}

export function decrease(num) {
    result -= num;
}

export function reset() {
    result = 0;
}

export function getMemo() {
    return result;
}
