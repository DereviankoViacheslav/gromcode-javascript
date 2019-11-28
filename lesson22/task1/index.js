const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const tasksList = document.querySelector('.list');

const renderList = (tasks) => {
    const listCreatedTasks = tasks
    .sort((a, b) => a.done - b.done)
    .map(({ text, done}) => {
        const chBox = document.createElement('input');
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');
        chBox.setAttribute('type', 'checkbox');
        // chBox.checked = done;
        chBox.classList.add('list__item-checkbox');
        listItem.append(chBox, text);
        
        return listItem;
    });
    
    tasksList.append(...listCreatedTasks);
};

renderList(tasks);

function taskHandler(event) {
    if(done) listItem.classList.add('list__item_done');
    event.target.checked
};
