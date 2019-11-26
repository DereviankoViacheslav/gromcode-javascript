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
        {
            name: 'Anna',
            age: 19,
            email: 'example4@server.com'
        },
        {
            name: 'July',
            age: 20,
            email: 'example5@server.com'
        },
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
        .filter(el => el.age >= 18)
        .map(el => {
            return {
                email: el.email,
                message: `Dear ${el.name}! ${this.message}`,
            };
        });
    },
};

console.log(event.getInvitations());


export {
    event
};
