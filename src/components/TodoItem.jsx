import { useState } from 'react'
function TodoItem({ task, handleChange, ...props }) {
  const { id, text, status, editable } = task
  const [isEditable, setIsEditable] = useState(editable)

  function getStatus() {
    if (status === 'done') {
      return 'bg-green-500'
    } else if (status === 'progress') {
      return 'bg-orange-500'
    } else {
      return 'bg-gray-500'
    }
  }

  return (
    <li
      className='bg-gray-200 py-2 px-3 rounded-md my-3 flex items-center gap-2'
      id={id}
      {...props}
    >
      {isEditable ? (
        <input
          type='text'
          className='bg-white border w-full'
          placeholder='Nuova task'
          value={text}
          onChange={handleChange}
        />
      ) : (
        <>
          <span
            className={`inline-block w-[12px] h-[12px] rounded-full mr-2 ${getStatus()}`}
          ></span>
          {text}
        </>
      )}
      <span
        onClick={() => setIsEditable(!isEditable)}
        className='ml-auto inline-block text-sx bg-cyan-900 text-white cursor-pointer'
      >
        {isEditable ? 'Salva' : 'Modifica'}
      </span>
    </li>
  )
}

export default TodoItem
