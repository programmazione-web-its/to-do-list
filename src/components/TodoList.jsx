import { useState } from 'react'
import { PlusIcon, ArrowClockwiseIcon } from '@phosphor-icons/react'

import Button from './Button'
import TodoItem from './TodoItem'
import Stats from './Stats'

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
    // const updatedTasks = allTasks.map((task) =>
    //   task.id === id ? { ...task, text: e.target.value, editable: false } : task
    // )
    // setAllTasks(updatedTasks)

    /* Forma migliorata 👇 */
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, text: e.target.value, editable: false }
          : task
      )
    )


  }

  function handleDeleteTask(id) {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  function handleStatusChange(id) {
    setAllTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, status: 'done'}: task))
  }

  const tasksChooser = status
    ? allTasks.filter((task) =>
      status === 'done' ? task.status === 'done' : task.status !== 'done'
    )
    : allTasks

  const tasksCompleted = allTasks.filter((task) => task.status === 'done')
  const tasksToDo = allTasks.filter((task) => task.status !== 'done')

  return (
    <>
      <div className='flex items-center gap-2'>
        <Button type='secondary' onBtnClick={() => handleClick('pending')}>
          Da fare
        </Button>
        <Button type='secondary' onBtnClick={() => handleClick('done')}>
          Completate
        </Button>
        {/* Il pulsante mostra tutte deve comparire solo quando i filtri sono attivi */}
        {
          status === 'done' || status === 'pending' ? (
            <Button
              type='light'
              className='flex items-center justify-content gap-2 ml-auto'
              onBtnClick={() => handleClick('')}
            >
              <ArrowClockwiseIcon size={18} />
              Mostra tutte
            </Button>
          ) : null
        }

        <Stats 
          className="ml-auto"
          completed={tasksCompleted.length} 
          toDo={allTasks.length - tasksCompleted.length} 
        />
      </div>
      <ul>
        {tasksChooser.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleChange={(e) => handleChange(e, task.id)}
            handleDeleteTask={() => handleDeleteTask(task.id)}
            handleStatusChange={() => handleStatusChange(task.id)}
          />
        ))}
      </ul>
      <Button
        onBtnClick={handleAddTask}
        className='flex items-center justify-content gap-2 mx-auto mt-9'
      >
        <PlusIcon size={18} />
        Aggiungi task
      </Button>
    </>
  )
}

export default TodoList
