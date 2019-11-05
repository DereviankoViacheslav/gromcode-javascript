const getCustomersList = obj => {
    for (const key in obj) {
        obj[key]['id'] = key;
    }
    return Object.values(obj).sort((elem1, elem2) => elem1.age - elem2.age);
}

// const customers = {
//     'customer-id-1': {
//         name: 'William',
//         age: 54
//     },
//     'customer-id-2': {
//         name: 'Tom',
//         age: 17
//     },
// };

// console.log(getCustomersList(customers));
