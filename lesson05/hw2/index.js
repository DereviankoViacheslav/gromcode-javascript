function getPrimes(num) {
    if (num > 0) console.log(1);
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
}

getPrimes(100);