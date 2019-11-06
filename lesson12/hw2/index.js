const cleanTransactionsList = array => {
    return array.filter(el => typeof (+el) === 'number' && !isNaN(el))
        .map(el => `$${(+el).toFixed(2)}`);
}
