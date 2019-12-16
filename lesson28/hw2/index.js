function maxFibonacci(value) {
    if(value <= 1) return 0;
    let a = 1;
    let b = 1;
    for (let i = 3; i <= value; i++) {
        let c = a + b;
        a = b;
        b = c;
        if (b >= value) return a;
    }
    return b;
};

export { maxFibonacci };
