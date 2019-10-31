const m = 1;
const n = 50;
let tmp = 0;
let result = 0;


for (let i = m; i <= n; i++) {
    if (!(i % 5)) {
        console.log(i);
        continue;
    }
    if (!(i % 2) && (i % 4)) {
        tmp += i;
    }
    if (!(i % 3)) {
        tmp -= i;
    }
    if (!(i % 4)) {
        tmp *= i;
    }
    result = tmp;
}

// console.log(result);
// console.log(tmp);

