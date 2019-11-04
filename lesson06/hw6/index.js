const clients = ['Jeck0', 'Jeck1', 'Jeck2', 'Jeck3', 'Jeck4', 'Jeck5', 'Jeck6'];
const balances = [100, 200, 300, 400, 500, 600, 700];

function withdraw(clients, balances, client, amount) {
    
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] !== client) continue;
        if (balances[i] > amount) {
            balances[i] -= amount;
            return balances[i];
        }
    }
    
    return -1;
}

// console.log(withdraw(clients, balances, 'Jeck2', 550));
// console.log(withdraw(clients, balances, 'Jeck2', 50));