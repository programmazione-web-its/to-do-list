import logo from './assets/logo.png'

import List from './components/List'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'

const listItems = [
  'List item 1',
  'List item 2',
  'List item 3',
  'List Item 4',
  'List Item 5',
]

function App() {
  return (
    <div>
      <header>
        <div className='container'>
          <img src={logo} alt='Logo della mia app' />
          <h1>Cosa devo fare oggi?</h1>
        </div>
      </header>

      <div className='container'>
        <List listElements={listItems} />
      </div>
    </div>
  )
}

export default App
