let sumOddNumbers = 0;


for (let i = 0; i < 1001; i++) {
    if (i % 2 !== 0) {
        console.log('Found');
        sumOddNumbers += i;
    }
}

if ((sumOddNumbers * 5) > 5000) {
    console.log('Bigger');
} else {
    console.log('Smaller or equal');
}
