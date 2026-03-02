import { useState } from 'react'

import logo from './assets/logo.png'

import List from './components/List'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import Container from './components/Container'

import { dummyTasks, doneTasks, pendingTasks } from './data/dummyTasks'

// function showCompleted() {
//   console.log('Task completate')
// }

// function showPending() {
//   console.log('Task da completare')
// }
console.log('DONE TASKS', doneTasks)
console.log('PENDING TASKS', pendingTasks)
function App() {
  // const [status, setStatus] = useState()
  const [tasks, setTasks] = useState(dummyTasks)

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

  return (
    <div>
      <header>
        <Container>
          <img src={logo} alt='Logo della mia app' />
          <h1>Cosa devo fare oggi?</h1>
        </Container>
      </header>

      <Container>
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
        <List listElements={tasks} />
        {/* {status === 'done' ? (
          <List listElements={doneTasks} />
        ) : (
          <List listElements={pendingTasks} />
        )} */}
      </Container>
    </div>
  )
}

export default App
