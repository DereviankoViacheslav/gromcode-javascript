const m = 1;
const n = 50;
let result = 0;


for (let i = m; i <= n; i++) {
    if (!(i % 2) && (i % 4)) {
        console.log(i + ': число кратно 2 но не кратно 4');
        result += i
    } else if (!(i % 3)) {
        console.log(i + ': число кратно 3');
        result -= i
    } else if (!(i % 4)) {
        console.log(i + ': число кратно 4');
        result *= i
    } else if (!(i % 5)) {
        console.log(i);
        console.log(i + ': число кратно 5');
    }  else continue;
}
