import { useState } from 'react'

import pencilIcon from '../assets/pencil.svg'
import trashIcon from '../assets/trash.svg'
import checkIcon from '../assets/check-circle.svg'

function List({ listElements }) {
  // let completed = 0
  // let pending = 10
  const [completed, setCompleted] = useState(0)
  const [pending, setPending] = useState(10)
  function handleClick(pulsante) {
    console.log('Click sul pulsante ', pulsante)
  }

  function updateCompleted() {
    setCompleted((prev) => prev + 1) // versione più giusta
    // setCompleted(completed + 1)
    setPending((prev) => prev - 1)
    console.log('completed count', completed)
  }

  return (
    <>
      <div className='completed-tasks'>
        <div>
          <span>{completed}</span>
          completate
        </div>
        <div>
          <span>{pending}</span>
          da completare
        </div>
      </div>
      <ul className='list'>
        {listElements.map((element) => (
          <li
            onClick={updateCompleted}
            className={`list-item ${element.status === 'done' && 'done'}`}
            key={element.id}
          >
            {element.text}
            <div className='actions'>
              {element.status === 'done' ? (
                <div className='icon-btn'>
                  <img src={checkIcon} alt='done' />
                </div>
              ) : (
                <div onClick={() => handleClick(element)} className='icon-btn'>
                  <img src={pencilIcon} alt='edit' />
                </div>
              )}

              <div className='icon-btn'>
                <img src={trashIcon} alt='delete' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
