const event = {
    guests: [{
            name: 'John',
            age: 17,
            email: 'example1@server.com'
        },
        {
            name: 'Bob',
            age: 16,
            email: 'example2@server.com'
        },
        {
            name: 'Nick',
            age: 18,
            email: 'example3@server.com'
        },
    ],
    message: 'Welcome to the party',
    getInvitations() {
        return this.guests
        .filter(({ age }) => age >= 18)
        .map(({ name, email }) => {
            return {
                email,
                message: `Dear ${this.name}! ${this.message}!`,
            };
        });
    },
};

export {
    event
};
