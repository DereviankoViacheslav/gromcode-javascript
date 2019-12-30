async function getUsersBlogs(usersList) {
    try {
        const requests = usersList
            .map(userId => fetch(`https://api.github.com/users/${userId}`)
                .then(response => response.json()));
        const usersData = await Promise.all(requests);
        return usersData.map(user => user.blog);
    } catch (error) {
        throw new Error(error.massage);
    }
};

// getUsersBlogs(['facebook8989111', 'github'])
// getUsersBlogs(['facebook', 'google', 'gaearon'])
getUsersBlogs(['facebook89899998', 'facebook', 'google', 'gaearon'])
    .then(result => console.log(result));

export { getUsersBlogs };
