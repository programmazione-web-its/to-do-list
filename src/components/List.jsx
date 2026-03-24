import { useState } from 'react'

import pencilIcon from '../assets/pencil.svg'
import trashIcon from '../assets/trash.svg'
import checkIcon from '../assets/check-circle.svg'

function List({ listElements, handleClick }) {
  // let completed = 0
  // let pending = 10

  function updateCompleted() {}

  return (
    <>
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
                <div
                  onClick={() => handleClick(element.id)}
                  className='icon-btn'
                >
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
