import pencilIcon from '../assets/pencil.svg'
import trashIcon from '../assets/trash.svg'

function List({ listElements }) {
  let completed = 0
  let pending = 10
  function handleClick(pulsante) {
    console.log('Click sul pulsante ', pulsante)
  }

  return (
    <>
      <div className='completed-tasks'>
        <div>
          <span>XX</span>
          completate
        </div>
        <div>
          <span>YY</span>
          da completare
        </div>
      </div>
      <ul className='list'>
        {listElements.map((element, i) => (
          <li className='list-item ' key={i}>
            {element}
            <div className='actions'>
              <div onClick={() => handleClick(element)} className='icon-btn'>
                <img src={pencilIcon} alt='edit' />
              </div>
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
