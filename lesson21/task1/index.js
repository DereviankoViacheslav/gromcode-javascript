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
        
//         if(done) listItem.classList.add('list__item_done');
        
//         const chBox = document.createElement('input');
//         chBox.classList.add('list__item-checkbox');
//         chBox.setAttribute('type', 'checkbox');
//         chBox.checked = done;
//         listItem.append(chBox, text);

//         return listItem;
//     });

//     tasksList.append(...listCreatedTasks);
// };

// renderList(tasks);

let tasks =   [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

function render (arr) {
    const list = document.querySelector('.list');

    let listItems = arr.map((i) => {
        const listItemElem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.classList.add('list__item-checkbox');
        checkBox.checked = i.done;
        listItemElem.classList.add('list__item');
        listItemElem.append(checkBox,i.text);
        if (i.done) {
            listItemElem.classList.add('done')
        }
        return listItemElem;
    });
    list.append(...listItems);
};

render(tasks);