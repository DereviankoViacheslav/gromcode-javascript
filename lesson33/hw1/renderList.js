import { getMostActiveDevs } from './index.js';

const inputNameOwnerElem = document.querySelector('.form__input-name-owner');
const inputNameRepoElem = document.querySelector('.form__input-name-repo');
const inputAmountDaysElem = document.querySelector('.form__input-amount-days');
const usersListElem = document.querySelector('.users-list');
const showUserBtnElem = document.querySelector('.name-form__btn');

function renderList() {
    showUserBtnElem.addEventListener('click', onSearchMostActiveDevs);
};

function onSearchMostActiveDevs() {
    const userId = inputNameOwnerElem.value;
    const repoId = inputNameRepoElem.value;
    // const days = inputAmountDaysElem.value;
    const days = 7;

    getMostActiveDevs({ days, userId, repoId })
        .then(users => renderUsers(users));
};

function renderUsers(users) {
    let listItem = '';

    users.map(({ name, avatar }) => {
        listItem += `<li class="users-list__item">
                        <img class="user__avatar" src="${avatar}" alt="User Avatar">
                        <span class="user__name">${name}</span>
                    </li>`;
    });
    usersListElem.innerHTML = listItem;
};

export { renderList };
