function bind(func, context, ...args) {
    let bindArgs = [].slice.call(arguments, 2);
    // console.log(bindArgs);
    // console.log(args);
    // console.log(args);
    return function() {
        // console.log(arguments);
        let fnArgs = [].slice.call(arguments);
        // console.log(fnArgs);
        return func.apply(context, bindArgs.concat(fnArgs));
        // return func.apply(context, args);
      };
}

// function foo(a, b) {
//     // console.log(this);
//     // console.log(a + b);
// }

// const obj = {
//     name: 'I',
// };

// // bind(foo, this)();
// // bind(foo, obj)();

// // const a = function () {
// // 	return this;
// // }

// bind(foo, {fff: 'bbb' }, 1, 2)();
// bind(foo, obj, 3, 4)();
// bind(foo, this, 5, 6)();
// // console.log(window);



// /*С помощью методов функций call или apply опишите функцию bind(func, context, [arg1], [arg2], ...[argn]), которая будет работать аналогично методу .bind функций

// Основные требования:
// Экспортируйте из файла функцию с именем bind
// Для реализации bind используйте методы функций call или apply
// Сигнатура bind(func, context, [arg1], [arg2]), где func - функция, к которой привязывается контекст; context - контекст для новой функции; далее необязательные аргументы arg1, arg2 ... для целевой функции func*/

// // var bind = function(fn, context) {
// //     // обрезаем ненужные аргументы (функцию и контекст)
// //     var bindArgs = [].slice.call(arguments, 2);
// //     return function() {
// //         // здесь все аргументы будут необходимы
// //         var fnArgs = [].slice.call(arguments);
// //         // собираем все 
// //         return fn.apply(context, bindArgs.concat(fnArgs));
// //     };
// // };



export { bind };