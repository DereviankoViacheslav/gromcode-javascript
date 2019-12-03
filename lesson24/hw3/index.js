const tasks = [
    {
        id: 0,
        text: 'Buy milk',
        done: false,
        dateCreated: new Date(2018, 7, 1),
        dateСompleted: undefined,
    },
    {
        id: 4,
        text: 'Pick up Tom from airport',
        done: false,
        dateCreated: new Date(2013, 1, 1),
        dateСompleted: undefined,
    },
    {
        id: 2,
        text: 'Visit party',
        done: false,
        dateCreated: new Date(2012, 9, 1),
        dateСompleted: undefined,
    },
    {
        id: 3,
        text: 'Visit doctor',
        done: true,
        dateCreated: new Date(2011, 4, 1),
        dateСompleted: new Date(2011, 4, 5),
    },
    {
        id: 1,
        text: 'Buy meat',
        done: true,
        dateCreated: new Date(2019, 3, 1),
        dateСompleted: new Date(2011, 4, 2),
    },
];

const tasksList = document.querySelector('.list');
tasksList.addEventListener('change', taskHandler);

const taskInput = document.querySelector('.task-input');

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', addTask);

renderList(createListTasksHTML(tasks));

function taskHandler(event) {
    const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
    task.done = event.target.checked;
    task.dateСompleted = task.done ? new Date() : undefined;
    renderList(createListTasksHTML(tasks));
};

function renderList(tasksHTML) {
    tasksList.innerHTML = '';
    tasksList.append(...tasksHTML);
};

function createListTasksHTML(tasks) {
    return tasks
        .sort((a, b) => b.dateCreated - a.dateCreated)
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => b.dateСompleted - a.dateСompleted)
        .map(({ id, text, done }) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list__item');
            listItem.setAttribute('id', `${id}`);
            const chBox = document.createElement('input');
            chBox.setAttribute('type', 'checkbox');
            chBox.checked = done;
            if (done) listItem.classList.add('list__item_done');
            chBox.classList.add('list__item-checkbox');
            listItem.append(chBox, text);

            return listItem;
        });
};

function addTask() {
    if (!taskInput.value.trim()) return;
    tasks.push({
        id: tasks.length,
        text: taskInput.value,
        done: false,
        dateCreated: new Date(),
        dateСompleted: undefined,
    });
    taskInput.value = '';
    renderList(createListTasksHTML(tasks));
};
