const getFiniteNumbers = array => array.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = array => array.filter(el => isFinite(el));

const getNaN = array => array.filter(el => Number.isNaN(el));

const getNaNV2 = array => array.filter(el => isNaN(el));

const getIntegers = array => array.filter(el => Number.isInteger(el));

// const arr = [2, 34, 56, 78, '35', true, undefined, 98, 6, NaN, 54, 75, 34, Infinity, -Infinity];

// console.log(getFiniteNumbers(arr));
// console.log(getFiniteNumbersV2(arr));
// console.log(getNaN(arr));
// console.log(getNaNV2(arr));
// console.log(getIntegers(arr));
// console.log(arr);


/*Функция с названием getIntegers должна отбросить все элементы исходного массива, которые не являются целыми числами. Для проверки должна использовать метод
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.isNaN vs isNaN и Number.isFinite vs isFinite */