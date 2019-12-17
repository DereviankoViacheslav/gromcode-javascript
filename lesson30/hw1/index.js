function delay(delay) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('resolve'));
        }, delay);
    });
    
    return p;
};

export { delay };
