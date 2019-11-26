function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    };
}

export {
    User
};
