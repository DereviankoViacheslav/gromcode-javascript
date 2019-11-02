function getPrimes(num) {
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) console.log(i);
    }
}

function isPrime(num) {
    for (let j = 2; j < num; j++) {
        if (num % j === 0) return false;
    }
    return true;
}

getPrimes(100);
