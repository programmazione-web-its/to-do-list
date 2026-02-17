import './App.css'

import Button from './components/Button'

function App() {
  function handleSecondButton() {
    console.log('Click sul secondo pulsante')
  }

  function handleButtonClick(btn) {
    if (btn === 'btn-1') {
      console.log('BTN 1 Clicked')
    } else {
      console.log('BTN 2 Clicked')
    }
  }

  return (
    <div>
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
    </div>
  )
}

export default App
