function fetchUserData(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json());
    // .then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error('Failed to load data');
    // });
};

function fetchRepositories(url) {
    return fetch(url)
        .then(response => response.json());
    // .then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error('Failed to load data');
    // });
}

export { fetchUserData, fetchRepositories };
