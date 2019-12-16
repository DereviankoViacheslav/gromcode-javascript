function pinger(num, period) {
    let i = num;
    console.log('Ping');
    const idInterval = setInterval(() => {
        if (i-- > 0) {
            console.log('Ping');
        } else {
            clearInterval(idInterval);
        }
    }, period)
};

export { pinger };
