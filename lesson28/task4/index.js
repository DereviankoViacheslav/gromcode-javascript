function compose(...funcs) {
    return function(value) {
        funcs.reduce((acc, func) => func(acc), value);
    };
};

export { compose };
