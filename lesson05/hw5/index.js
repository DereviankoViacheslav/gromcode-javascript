function findDivCount(a, b, n) {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (i % n !== 0) continue;
        cnt++;
    }
    return cnt;
}
