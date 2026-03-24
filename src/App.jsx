import { useState } from 'react'

import logo from './assets/logo.png'

import Button from './components/Button'
import Container from './components/Container'
import List from './components/List'
import CounterStats from './components/CounterStats'

import { dummyTasks } from './data/dummyTasks'

function countCompleted(items) {
  let tasks = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].status === 'done') {
      tasks.push(items[i])
    }
  }
  return tasks
}

function countPending(items) {
  let tasks = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].status === 'pending') {
      tasks.push(items[i])
    }
  }
  return tasks
}

function updateList(items, elementId) {
  let tasks = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === elementId) {
      items[i].status = 'done'
      tasks.push(items[i])
    } else {
      tasks.push(items[i])
    }
  }

  console.log('Updated lists', tasks)

  return tasks
}

function App() {
  // const [status, setStatus] = useState()
  const [tasks, setTasks] = useState(dummyTasks)
  const [newTask, setNewTask] = useState('Nuova task')
  const doneTasks = countCompleted(tasks)
  const pendingTasks = countPending(tasks)

  function showStatus(status) {
    // setStatus(status)

    if (status === 'done') {
      setTasks(doneTasks)
    } else if (status === 'pending') {
      setTasks(pendingTasks)
    } else {
      setTasks(dummyTasks)
    }
  }

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  function addNewTask() {
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      status: 'pending',
    }

    setTasks((prevTasks) => [...prevTasks, newTaskObj])
  }

  function changeTaskStatus(e) {
    console.log('Click singola funzione', e)
    const updatedTask = updateList(tasks, e)
    setTasks(updatedTask)
  }

  return (
    <div>
      <header>
        <Container>
          <img src={logo} alt='Logo della mia app' />
          <h1>Cosa devo fare oggi?</h1>
        </Container>
      </header>

      <Container>
        <div>
          <div className='filter'>
            <Button
              title='Completate'
              classes='btn-primary'
              handleClick={() => showStatus('done')}
            />
            <Button
              title='Da completare'
              classes='btn-secondary'
              handleClick={() => showStatus('pending')}
            />
            <Button
              title='Tutte'
              classes='btn-secondary'
              handleClick={() => showStatus('')}
            />
          </div>
          <CounterStats done={doneTasks.length} pending={pendingTasks.length} />
        </div>
        <List listElements={tasks} handleClick={changeTaskStatus} />

        <div>
          <input
            id='new-task'
            name='new-task'
            value={newTask}
            onChange={handleChange}
            placeholder='Inizia a scrivere'
            className='input'
          />
          <Button
            handleClick={addNewTask}
            title='Aggiungi una nuova task'
            classes='btn-primary'
          />
        </div>
      </Container>
    </div>
  )
}

export default App
