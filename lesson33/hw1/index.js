import { getDevelopers } from './renderList.js';

// `https://api.github.com/repos/DereviankoViacheslav/calendar-web-app/commits?per_page=100`)

function getMostActiveDevs({ days, userId, repoId }) {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(respons => respons.json())
        .then(commits => getDevelopers(commits, days));
};

export { getMostActiveDevs };
