const multiRound = num => [
    Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num),
    Number(num.toFixed())
];