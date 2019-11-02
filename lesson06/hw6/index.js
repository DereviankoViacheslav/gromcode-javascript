const clients = ['Jeck0', 'Jeck1', 'Jeck2', 'Jeck3', 'Jeck4', 'Jeck5', 'Jeck6'];
const balances = [100, 200, 300, 400, 500, 600, 700];

function withdraw(clients, balances, client, amount) {
    
    if (balances[client] > amount) {
        balances[client] -= amount;
        return balances[client];
    }
    
    return -1;
}

// console.log(withdraw(clients, balances, 2, 550));
// console.log(withdraw(clients, balances, 2, 50));