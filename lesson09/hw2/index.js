const getPeople = obj => Object.entries(obj)
    .map(elem => elem[1].map(elem => elem.name))
    .flat();

const rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
        { name: 'room1 name5' },
        { name: 'room1 name6' },
    ],
    room2: [
        { name: 'room2 name1' },
        { name: 'room2 name2' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        { name: 'room3 name4' },
    ],
};

console.log(getPeople(rooms));
console.log(getPeople({}));
/*Функция с именем getPeople должна принимать объект в заданом выше формате
Функция должна вернуть список имен пользователей в виде массива (плоский массив строк ['room1 name1', 'room1 name2', ... 'room2 name1', 'room3 name1', ...]).
Количество комнат и количество людей в комнате может быть любым.
Пользуйтесь разнообразием методов массивов и объектов. Обычный цикл for для решения этой задачи подходит не лучшим образом.
 */