class User {

    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
};

class UserRepository {

    constructor(users) {
        this.users = Object.freeze(users);
    }

    getUserNames() {
        return this.users.map(({ name }) => name);
    }

    getUserIds() {
        return this.users.map(({ id }) => id);
    }
    
    getUserNameById(userId) {
        const user = this.users.find(({ id }) => id === userId);
        return user ? user.name : user;
    }
};

export { User, UserRepository };
