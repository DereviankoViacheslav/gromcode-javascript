export const getSum = (startNum, endNum) => {
    let result = 0;
    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 === 0) result += i;
    }
    return result;
}
