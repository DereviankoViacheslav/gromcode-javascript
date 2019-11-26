class User {

    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
};

class UserRepository {

    constructor(users) {
        this.users = users;
        this.name = name;
        this.sessionId = sessionId;
    }

    getUserNames() {}

    getUserIds() {}
    
    getUserNameById(userId) {}
};

/*Создайте класс User и UserRepository - коллекцию польсователей

Основные требования:

Создать класс User c полями
id - string
name - string - имя пользователя
sessionId - string
Конструктор должен принимать параметры в том порядке, как они указаны выше. Также возможность модификации полей должна быть закрыта, но возможность их считывания нет
Создать класс UserRepository c полями
users - array[User] - массив объектов пользователей
Поле инициализируется в конструкторе (входящим массивом. Возможность модификации поля из других классов должна быть закрыта, но возможность чтения открыта. Чтобы запретить мутацию массива, используйте метод Object.freeze
Создать методы ниже
getUserNames() - для получения массива имен пользователей
getUserIds() - должен проставлять ордер в статус confirmed = true (если заказ не был подтвержден раньше) и дату конфирма ставить в текущую
getUserNameById(long id) - для получения имени пользователя, по его id*/