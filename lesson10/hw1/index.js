const getTotalPrice = array => {
    return array.reduce((acc, el) => acc + el);
}
console.log(getTotalPrice([2.05, 5.233226, 59.002365]));


/*Создайте функцию, которая будет возвращать округленную сумму чисел

Основные требования:
Функция должна называться getTotalPrice
Функция должна принимать массив чисел (могут быть дробные) как единственный аргумент
Функция должна посчитать сумму чисел массива, окрунлить ее до 2-х знаков и вернуть в формате '$17.15'
Округление должно проходить в меньшую сторону (17.159 => 17.15)*/