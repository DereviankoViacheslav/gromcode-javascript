async function getUsersBlogs(usersList) {
    // const userBlogs = [];
    // try {
    //     for (let i = 0; i < users.length; i++) {
    //         const response = await fetch(`https://api.github.com/users/${users[i]}`);
    //         // if (!response.ok) throw new Error('Failed to load data');
    //         const result = await response.json()
    //         userBlogs.push(result.blog);
    //     }
    //     return userBlogs;
    // } catch (error) {
    //     console.log(error);
    // }
    const requests = usersList
        .map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json()));
    return await Promise.all(requests);
    // const usersData = await Promise.all(requests);
    // return usersData;
};

getUsersBlogs(['facebook89899998', 'facebook', 'google', 'gaearon'])
    .then(result => console.log(result));

export { getUsersBlogs };

// const requests = usersList
//             .map(userId => fetch(`https://api.github.com/users/${userId}`).then(response => response.json()));
//         const usersData = await Promise.all(requests);