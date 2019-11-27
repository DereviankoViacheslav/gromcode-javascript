export class User {

    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
};

export class UserRepository {

    constructor(users) {
        this._users = Object.freeze(users);
    }

    getUserNames() {
        return this._users.map(({ name }) => name);
    }

    getUserIds() {
        return this._users.map(({ id }) => id);
    }
    
    getUserNameById(userId) {
        const user = this._users.find(({ id }) => id === userId);
        return user ? user.name : user;
    }
};

// const arr = [
//     new User(1, 'aaa', 10001),
//     new User(2, 'bbb', 10002),
//     new User(3, 'ccc', 10003),
//     new User(4, 'ddd', 10004),
//     new User(5, 'eee', 10005),
// ];

// const Users = new UserRepository(arr);

// console.log(Users._users);
// Users._users.push(new User(6, 'fff', 19996));
// Users._users = 'str';
// console.log(Users._users);

// export { User, UserRepository };
