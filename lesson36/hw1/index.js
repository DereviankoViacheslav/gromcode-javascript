async function getUsersBlogs(usersList) {
    // try {
    const requests = usersList
        .map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error(error.massage);
            }));
    const usersData = await Promise.all(requests);
    return usersData.map(user => user.blog);
    // } catch (error) {
    //     throw new Error(error.massage);
    // }
};

// getUsersBlogs(['facebook89899998', 'facebook', 'google', 'gaearon'])
getUsersBlogs(['facebook', 'google', 'gaearon'])
    .then(result => console.log(result));

export { getUsersBlogs };


/*
    .catch(error => {
        throw new Error(error.massage);
    })
*/