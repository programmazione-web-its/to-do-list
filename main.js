let tasks = [
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
const sortAsc = document.getElementById('sortAsc')
const sortDesc = document.getElementById('sortDesc')

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
  if (text.length < 4) {
    alert('Devi inserire una task')
    return
  }
  // if (!text.trim()) {
  //   alert('Devi inserire una task')
  //   return
  // }
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

function sortAscFunc() {
  const sortedTasks = tasks.sort((a, b) => {
    a.text.localeCompare(b.text) - b.text.localeCompare(a.text)
  })
  console.log(sortedTasks)
}

async function getRemoteTasks() {
  try {
    const reponse = await fetch('https://dummyjson.com/todos')
    if (!reponse.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await reponse.json()

    const remoteTodos = data.todos // Accedi ai todos nel mio oggetto
    const todos = remoteTodos.map((todo) => ({
      // mappa l'array todo per restiuitre un array con gli oggetti formattati come servono a noi
      ...todo,
      text: todo.todo,
      id: Date.now(),
    }))

    tasks = [...tasks, ...todos]
    document.getElementById('loading').style.display = 'none'
    renderList(tasks)
  } catch (error) {
    console.log('Error', error)
  }
}

document.addEventListener('DOMContentLoaded', () => getRemoteTasks())

addBtn.addEventListener('click', () => addTask(input.value))

showDoneBtn.addEventListener('click', filterByDone)
showTodoBtn.addEventListener('click', filterByNotDone)
showAllBtn.addEventListener('click', () => renderList(tasks))
