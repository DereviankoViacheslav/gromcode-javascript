const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderList = (tasks) => {
    const tasksList = document.querySelector('.list');
    const listCreatedTasks = tasks
    .sort((a, b) => a.done - b.done)
    .map(({ text, done}) => {
        const listItem = document.createElement('li');
        const chBox = document.createElement('input');
        listItem.classList.add('list__item');
        chBox.classList.add('list__item-checkbox');
        chBox.setAttribute('type', 'checkbox');
        chBox.checked = done;
        if(done) listItem.classList.add('list__item_done');
        listItem.append(chBox, text);

        return listItem;
    });

    tasksList.append(...listCreatedTasks);
};

renderList(tasks);
