const baseUrl = 'https://crudcrud.com/api/bbb3e207b5a14cfd8a825bd4dcb1e25a/users';

function addUser(userData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    })
};

export { addUser };
