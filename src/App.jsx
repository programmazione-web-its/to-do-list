import './App.css'

import Button from './components/Button'
import List from './components/List'

import HelloWorld from './components/HelloWorld'


const listItems = [
  "List item 1", "List item 2", "List item 3", "List Item 4", "List Item 5"
]

const list2 = [ "Pippo", "Pluto","Paperino"]

function App() {

  function handleButtonClick(btn) {
    if (btn === 'btn-1') {
      console.log('BTN 1 Clicked')
    } else {
      console.log('BTN 2 Clicked')
    }
  }


  return (
    <div>
     
      <HelloWorld user="Paperino" message="Benvenuti a Paperopoli!" />
      <h1>Questo è il mio primo componente React</h1>
      <Button
        title='Sono il titolo del pulsante'
        handleClick={() => handleButtonClick('btn-1')}
      />
      <Button
        title='Sono il secondo pulsante'
        classes='secondary-btn my-btn'
        handleClick={() => handleButtonClick('btn-2')}
      />
          
      <List listElements={listItems}  />
      <h3>Questa è un'altra lista</h3>
      <List listElements={list2} />
    </div>
  )
}

export default App
