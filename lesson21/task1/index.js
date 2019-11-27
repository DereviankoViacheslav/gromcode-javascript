// const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];

// const renderList = (tasks) => {
//     const tasksList = document.querySelector('.list');
//     const listCreatedTasks = tasks
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done}) => {
//         const listItem = document.createElement('li');
//         listItem.classList.add('list__item');
//         const chBox = document.createElement('input');
//         chBox.setAttribute('type', 'checkbox');
//         chBox.checked = done;
//         if(done) listItem.classList.add('list__item_done');
//         chBox.classList.add('list__item-checkbox');
//         listItem.append(chBox, text);

//         return listItem;
//     });

//     tasksList.append(...listCreatedTasks);
// };

// renderList(tasks);

const task = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
]

const rederListItem = listItem => {

    const listElement = document.querySelector('.list');
    const listItemElements = listItem
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li')
            listItemElem.classList.add('list__item');
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox')
            checkboxElem.checked = done;
            if (done) listItemElem.classList.add('list__item_done')
            checkboxElem.classList.add('list__item-checkbox')
            listItemElem.append(checkboxElem, text)
            return listItemElem
        });

    listElement.append(...listItemElements)
}


rederListItem(task);