function maxFibonacci(value) {
    if(value <= 1) return 0;
    let prev = 0, next = 1;
    while(next < value) {
        let fib = prev + next;
        prev = next;
        next = fib;
        if(fib >= value) return prev;
    }
};

export { maxFibonacci };
