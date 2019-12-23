// import { initHandlers } from './initHandlers.js';

// document.addEventListener('DOMContentLoaded', () => {
//     initHandlers();
// });

const baseUrl = 'https://crudcrud.com/api/6292d9d47ada4bd4afc3cd42969fdea2/users';

function addUser(userData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    })
};

const submitBtnElem = document.querySelector('.submit-button');
const form = document.forms[0];
const errorTextElem = document.querySelector('.error-text');
const inputEmailElems = document.querySelector('#email');
const inputNameElems = document.querySelector('#name');
const inputPasswordElems = document.querySelector('#password');

form.addEventListener('input', validateFields);
form.addEventListener('submit', submitData);
// function initHandlers() {
// };

function validateFields() {
    if (form.reportValidity()) {
        submitBtnElem.disabled = false;
    } else {
        submitBtnElem.disabled = true;
    }
    errorTextElem.textContent = '';
};

function submitData(event) {
    event.preventDefault();
    const newUser = {
        name: inputNameElems.value,
        email: inputEmailElems.value,
        password: inputPasswordElems.value,
    };

    addUser(newUser)
        .then(data => {
            inputNameElems.value = '';
            inputEmailElems.value = '';
            inputPasswordElems.value = '';
            submitBtnElem.disabled = true;
            alert(data);
        })
        .catch(() => {
            errorTextElem.textContent = 'Failed to create user';
        });
};
