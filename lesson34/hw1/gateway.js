const baseUrl = 'https://crudcrud.com/api/6292d9d47ada4bd4afc3cd42969fdea2/users';

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
