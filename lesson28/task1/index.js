function calc(initValue) {
    let result = initValue;
    const calculator = {
        add(value) {
            result += value;
            return calculator;
        },
        subtract(value) {
            result -= value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result(value) {
            return result;
        },
    };

    return calculator;
};

export { calc };
