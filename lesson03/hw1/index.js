/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* В коде ниже нужно использовать правильные операторы после знака присваивания */
const activeUser = anotherUser || defaultUserName;
console.log("activeUser должна иметь значение 'anonymus': ", activeUser);
const hasAccess = isAdmin || isLoggedIn;
console.log("hasAccess должна иметь значение true: ", hasAccess);
const isTruthy = message !== anotherMessage;
console.log("isTruthy должна иметь значение true: ", isTruthy);
const isFalsy = !isLoggedIn;
console.log("isFalsy должна иметь значение false: ", isFalsy);
const isNotTrue = typeof message === 'number';
console.log("isNotTrue должна иметь значение false: ", isNotTrue);
const isTrue = typeof message !== 'boolean';
console.log("isTrue должна иметь значение true: ", isTrue);
