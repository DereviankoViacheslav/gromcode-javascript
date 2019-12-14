function mult(a) {
    return function(b) {
        return a * b;
    };
};

function twice(a) {
    return mult(2)(a);
};

function triple(a) {
    return mult(3)(a);
};

export { twice, triple };
