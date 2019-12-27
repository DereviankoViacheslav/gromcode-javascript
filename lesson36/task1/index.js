async function fetchUser(userId) {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        if (!response.ok) return null;

        const UserData = await response.json()
        return UserData;
    } catch (e) {
        throw new Error('Failed to fetch user')
    }
}

export { fetchUser };
