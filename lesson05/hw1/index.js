function getSum(startNum = 0, endNum = 0) {
    let result = 0;
    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 === 0) result += i;
    }
    return result;
}
