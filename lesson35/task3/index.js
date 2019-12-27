import { fetchUserData, fetchRepositories } from './src/js/gateways.js'
import { renderUserData } from './src/js/user.js'
import { renderRepos, cleanReposList } from './src/js/repos.js'
import { showSpinner, hideSpinner } from './src/js/spinner.js'

const defaultUser = {
    avatar_url: `https://avatars3.githubusercontent.com/u10001`,
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

function onSearchUser() {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch(err => {
            hideSpinner();
            alert('Failed to load data');
        })
};

showUserBtnElem.addEventListener('click', onSearchUser);
