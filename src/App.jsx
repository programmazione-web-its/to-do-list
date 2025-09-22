import './App.css'
import dummyTasks from './data/dummyTasks'
import TodoList from './TodoList'

function App() {


  return (
    <div className="container">
     <TodoList tasks={dummyTasks} />
    </div>
  )
}

export default App
