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

/**
 * На промежутке от 0 до 1000 включительно, для каждого нечетного числа выводите в консоль слово Found. Найдите сумму
таких чисел. Если их сумма умноженная на 5 больше 5000, выводите в консоль текст Bigger, в другом случае выводите текст
Smaller or equal

Основные требования:

Выводить в консоль слово Found нужное количество раз
Не выводить в консоль значение суммы
Выводить верный текст в конце (Bigger или Smaller or equal)
 */