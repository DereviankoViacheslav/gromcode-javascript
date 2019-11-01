function getPrimes(num) {
    for (let i = 2; i <= num; i++) {
        let cnt = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j) {
                continue;
            }
            cnt += 1;
        }
        if (cnt === 1) console.log(i);
    }
}
