// function compose(...funcs) {
//     return function(value) {
//         funcs.reduce((acc, func) => func(acc), value);
//     };
// };

const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value);
};

export { compose };
