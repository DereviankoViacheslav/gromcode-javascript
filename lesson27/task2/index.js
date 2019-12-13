const counter = document.querySelector('.counter');
const counterValueElement = document.querySelector('.counter__value');

counter.addEventListener('click',counterChange); 

window.addEventListener('storage', (event) => {
    counterValueElement.textContent = event.newValue;
});

function counterChange(event) {
    const button = event.target.classList.contains('counter__button');
    if (!button) return;
    let value = +counterValueElement.textContent;
    const data = event.target.dataset.action;
    const newValue = data === 'increase' ? value + 1: value - 1;
    localStorage.setItem('count',newValue);
    counterValueElement.textContent = newValue;
};
