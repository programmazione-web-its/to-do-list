import { useState } from 'react'

import Button from './Button'
import TodoItem from './TodoItem'

function TodoList({ tasks }) {
  const [allTasks, setAllTasks] = useState(tasks)

  const [status, setStatus] = useState()

  function handleClick(status) {
    setStatus(status)
  }

  function handleAddTask() {
    setAllTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        text: 'Sono una task nuova!',
        status: 'pending',
        editable: true,
      },
    ])
  }

  function handleChange(e, id) {
    const updatedTasks = allTasks.map((task) =>
      task.id === id ? { ...task, text: e.target.value, editable: false } : task
    )
    setAllTasks(updatedTasks)
  }

  const tasksChooser = status
    ? allTasks.filter((task) =>
        status === 'done' ? task.status === 'done' : task.status !== 'done'
      )
    : allTasks

  return (
    <>
      <div className='flex items-center gap-2'>
        <Button onBtnClick={() => handleClick('pending')}>Da fare</Button>
        <Button onBtnClick={() => handleClick('done')}>Completate</Button>
      </div>
      <ul>
        {tasksChooser.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleChange={(e) => handleChange(e, task.id)}
          />
        ))}
      </ul>
      <Button onBtnClick={handleAddTask}>Aggiungi una nuova task</Button>
    </>
  )
}

export default TodoList
