function parseUser(data) {
    try {
        const result = JSON.parse(data);
        return result;
    } catch(e) {
        return null;
    }
};

export { parseUser };
