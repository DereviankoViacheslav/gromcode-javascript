function requestUserData(userId, callback) {
    setTimeout(() => {
        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        callback({
            name: 'John',
            age: 17,
            userId,
            email: 'userid777@example.com'
        }, 'S');
    }, Math.floor(Math.random() * 3 + 1) * 1000);
};

export { requestUserData };
