const tasks = [
  {
    id: Date.now(),
    text: 'Task 1',
    completed: true,
  },
  {
    id: Date.now(),
    text: 'Task 2',
    completed: false,
  },
  {
    id: Date.now(),
    text: 'Task 3',
    completed: true,
  },
  {
    id: Date.now(),
    text: 'Task 4',
    completed: false,
  },
  {
    id: Date.now(),
    text: 'Task 5',
    completed: false,
  },
  {
    id: Date.now(),
    text: 'Task 5',
    completed: false,
  },
]

const addBtn = document.getElementById('addTaskBtn')
const input = document.getElementById('taskInput')
const showAllBtn = document.getElementById('showAll')
const showDoneBtn = document.getElementById('showDone')
const showTodoBtn = document.getElementById('showTodo')

function renderList(tasksArray) {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = ''
  // for (const [i, task] of tasks.entries()) {
  //   const li = document.createElement('li')

  //   // li.innerText = task.text
  //   const isTaskCompleted = task.completed ? '✅' : '❌'

  //   li.innerHTML = `${isTaskCompleted} ${task.text}  <span class="delete">🗑️</span>`
  //   taskList.appendChild(li)
  //   const deleteBtn = li.querySelector('.delete')
  //   deleteBtn.addEventListener('click', () => deleteTask(i))
  // }
  // for (let i = 0; i < tasks.length; i++) {
  //   const li = document.createElement('li')
  //   const task = tasks[i]
  //   // li.innerText = task.text
  //   const isTaskCompleted = task.completed ? '✅' : '❌'

  //   li.innerHTML = `${isTaskCompleted} ${task.text}  <span class="delete">🗑️</span>`
  //   taskList.appendChild(li)
  //   const deleteBtn = li.querySelector('.delete')
  //   deleteBtn.addEventListener('click', () => deleteTask(i))
  // }

  tasksArray.forEach((task, i) => {
    const li = document.createElement('li')

    // li.innerText = task.text
    const isTaskCompleted = task.completed ? '✅' : '❌'

    li.innerHTML = `<span class="statusToggler">${isTaskCompleted}</span> ${task.text}  <span class="delete">🗑️</span>`
    taskList.appendChild(li)
    const deleteBtn = li.querySelector('.delete')
    deleteBtn.addEventListener('click', () => deleteTask(i))

    const statusToggler = li.querySelector('.statusToggler')
    statusToggler.addEventListener('click', (e) => {
      changeTaskStatus(i)
      console.log(e.target)
    })
  })
}

function addTask(text) {
  const item = {
    id: Date.now(),
    text: text,
    completed: false,
  }
  tasks.push(item)
  renderList(tasks)
  input.value = ''
}

function deleteTask(index) {
  tasks.splice(index, 1)
  renderList(tasks)
}

function changeTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed
  renderList(tasks)
}

function filterByDone() {
  const doneTasks = tasks.filter((el) => el.completed)
  renderList(doneTasks)
}

function filterByNotDone() {
  const notDoneTasks = tasks.filter((el) => !el.completed)
  renderList(notDoneTasks)
}

document.addEventListener('DOMContentLoaded', () => renderList(tasks))

addBtn.addEventListener('click', () => addTask(input.value))

showDoneBtn.addEventListener('click', filterByDone)
showTodoBtn.addEventListener('click', filterByNotDone)
showAllBtn.addEventListener('click', () => renderList(tasks))
