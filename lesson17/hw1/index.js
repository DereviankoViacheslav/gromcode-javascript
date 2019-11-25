const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        if(!this.firstName && !this.lastName) return undefined;
        return this.firstName + ' ' + this.lastName;
    },
    setFullName(fullName) {
        let [first, last] = fullName.split(' ');
        this.firstName = first;
        this.lastName = last;
    },
}

export { user };
