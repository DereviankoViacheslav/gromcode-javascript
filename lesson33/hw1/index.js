const inputNameOwnerElem = document.querySelector('.form__input-name-owner');
const inputNameRepoElem = document.querySelector('.form__input-name-repo');
const inputAmountDaysElem = document.querySelector('.form__input-amount-days');
const inputAmountUsersElem = document.querySelector('.form__input-amount-users');
const usersListElem = document.querySelector('.users-list');
const showUserBtnElem = document.querySelector('.form__btn');

showUserBtnElem.addEventListener('click', onSearchMostActiveDevs);

function onSearchMostActiveDevs() {
    const userId = inputNameOwnerElem.value;
    const repoId = inputNameRepoElem.value;
    const days = inputAmountDaysElem.value;
    const amountUsers = inputAmountUsersElem.value;
    // const days = 7;
    // const amountUsers = 5;
    getMostActiveDevs({ days, userId, repoId, amountUsers })
        .then(users => renderUsers(users));
};

function getMostActiveDevs(options) {
    const { days, userId, repoId, amountUsers } = options;
    return fetchCommits(userId, repoId)
        .then(commits => getDevelopers(commits, days, amountUsers));

};

function getDevelopers(commits, days, amountUsers) {
    const lastCommits = getLastCommits(commits, days);

    const listUsersId = lastCommits
        .reduce((acc, commit) => !acc.includes(commit.author.id)
            ? [...acc].concat(commit.author.id)
            : acc, []);

    return listUsersId
        .map(usersId => counterCommitsOfUser({ id: usersId }, lastCommits))
        .slice(0, amountUsers > listUsersId.length ? listUsersId.length : amountUsers);
};

function counterCommitsOfUser(user, commits) {
    commits.map(commit => {
        if (user.id === commit.author.id) {
            user.name = !user.name ? commit.commit.author.name : user.name;
            user.email = !user.email ? commit.commit.author.email : user.email;
            user.count = !user.count ? 1 : ++user.count;
        }
    });

    return user;
};

function getLastCommits(commits, amountDays) {
    const fromDate = getStartDate(amountDays);

    return commits.filter(commit => new Date(commit.commit.author.date) - fromDate > 0);
};

function getStartDate(daysAgo) {
    const currentDate = new Date();
    const fromDate = new Date(new Date().setDate(currentDate.getDate() - daysAgo));

    return fromDate;
};

function fetchCommits(userId, repoId) {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    // return fetch(`https://api.github.com/repos/DereviankoViacheslav/calendar-web-app/commits?per_page=100`)
        .then(respons => respons.json());
};

function renderUsers(users) {
    let listItem = '';

    users
    .sort((a, b) => b.count - a.count)
    .map(({ name }) => {
        listItem += `<li class="users-list__item">
                        <span class="user__name">${name}</span>
                    </li>`;
    });
    usersListElem.innerHTML = listItem;
};

export { getMostActiveDevs };
