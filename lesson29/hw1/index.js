function requestUserData(userId, callback) {
    setTimeout(() => {
        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        return callback({
            name: 'John',
            age: 17,
            userId,
            email: 'userid777@example.com',
        });
    }, Math.floor(Math.random() * 3 + 1) * 1000);
};

// requestUserData('broken', foo);

// function foo(obj, str) {
//     if (!obj) {
//         console.log(str);
//         return;
//     }
//     console.log('valid ==> ',str);
//     console.log(obj.userId);
// }

export { requestUserData };
