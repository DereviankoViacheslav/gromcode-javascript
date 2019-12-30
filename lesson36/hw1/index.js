async function getUsersBlogs(users) {
    const userBlogs = [];
    try {
        for (let i = 0; i < users.length; i++) {
            const response = await fetch(`https://api.github.com/users/${users[i]}`);
            if (!response.ok) throw new Error('Failed to load data');
            const result = await response.json()
            userBlogs.push(result.blog);
        }
        return userBlogs;
    } catch (error) {
        console.log(error);
    }
};

getUsersBlogs(['facebook89899998', 'facebook', 'google', 'gaearon'])
    .then(result => console.log(result));

export { getUsersBlogs };
