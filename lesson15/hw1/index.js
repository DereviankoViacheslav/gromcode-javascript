function createCalculator() {
    
    let result = 0;

    return {
        add: function(num) {
            result += num;
        },
        
        decrease: function(num) {
            result -= num;
        },
        
        reset: function() {
            result = 0;
        },
        
        getMemo: function() {
            return result;
        },
    };
}

export { createCalculator };

// const calculator1 = createCalculator();
// const calculator2 = createCalculator();
// calculator1.add(25);
// console.log(calculator1.getMemo()); // 25
// calculator1.decrease(20);
// console.log(calculator1.getMemo()); // 5
// calculator1.reset();
// console.log(calculator1.getMemo()); // 0

// calculator2.add(45);
// console.log(calculator2.getMemo()); // 45
// calculator2.decrease(30);
// console.log(calculator2.getMemo()); // 15
// calculator2.reset();
// console.log(calculator2.getMemo()); // 0


/*Создайте ф-цию, которая будет возвращать калькуляторы с памятью

Основные требования
Из файла index.js должна экспортироваться ф-ция с именем createCalculator
createCalculator должна вернуть объект с методами:
add - увеличивает число в памяти на то, что передано в аргументе
decrease - уменьшает число в памяти на то, что передано в аргументе
reset - сбрасывает память (устанавливать 0)
getMemo - возвращает число в памяти
В памяти по умолчанию долен храниться 0
Калькуляторы, созданные с помощью createCalculator должны быть независимы друг от друга (у каждого своя память)
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте*/