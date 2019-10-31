const m = 1;
const n = 50;
// let tmp = 0;
let result = 0;

for (let i = m; i <= n; i++) {
    if (!(i % 2) && (i % 4)) {
        result += i;
    } else if (!(i % 3)) {
        result -= i;
    } else if (!(i % 4)) {
        result *= i;
    }
    if (!(i % 5)) {
        console.log(i);
    }
}

// console.log(result);
