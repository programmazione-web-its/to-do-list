import './App.css'
import TodoList from './components/TodoList'
import Container from './components/Container'
import dummyTasks from './data/dummyTasks'

function App() {


  return (
    
      <Container>
        <TodoList tasks={dummyTasks} />
      </Container>

     
    
  )
}

export default App
