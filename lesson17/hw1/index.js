const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
    setFullName(fullName) {
        let [first, last] = fullName.split(' ');
        this.firstName = first;
        this.lastName = last;
    },
}

export { user };
