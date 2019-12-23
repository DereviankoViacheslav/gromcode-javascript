// import { addUser } from './gateway.js'

// const submitBtnElem = document.querySelector('.submit-button');
// const form = document.forms[0];
// const errorTextElem = document.querySelector('.error-text');
// const inputEmailElems = document.querySelector('#email');
// const inputNameElems = document.querySelector('#name');
// const inputPasswordElems = document.querySelector('#password');

// function initHandlers() {
//     form.addEventListener('input', validateFields);
//     form.addEventListener('submit', submitData);
// };

// function validateFields() {
//     if (form.reportValidity()) {
//         submitBtnElem.disabled = false;
//     } else {
//         submitBtnElem.disabled = true;
//     }
//     errorTextElem.textContent = '';
// };

// function submitData(event) {
//     event.preventDefault();
//     const newUser = {
//         name: inputNameElems.value,
//         email: inputEmailElems.value,
//         password: inputPasswordElems.value,
//     };

//     addUser(newUser)
//         .then(data => {
//             inputNameElems.value = '';
//             inputEmailElems.value = '';
//             inputPasswordElems.value = '';
//             submitBtnElem.disabled = true;
//             alert(data);
//         })
//         .catch(() => {
//             errorTextElem.textContent = 'Failed to create user';
//         });
// };

// export { initHandlers };
