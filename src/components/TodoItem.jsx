import { useState } from 'react'

import {
    PenIcon,
    TrashIcon,
    CheckCircleIcon,
    FloppyDiskBackIcon,
} from '@phosphor-icons/react'

function TodoItem({ task, handleChange,handleStatusChange, handleDeleteTask,  ...props }) {
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
            <div className='flex items-center ml-auto gap-2'>
                {
                    status !== 'done' && (
                        <>
                            <span onClick={handleStatusChange} className='ml-auto inline-block  cursor-pointer'>
                                {/* Deve vedersi solo se non è completata la task */}
                                <CheckCircleIcon size={22} />
                            </span>
                            <span
                                onClick={() => setIsEditable(!isEditable)}
                                className='ml-auto inline-block  cursor-pointer'
                            >
                                {/* Se la task è completata, non può più essere modificabile */}
                                {isEditable ? (
                                    <FloppyDiskBackIcon size={22} />
                                ) : (
                                    <PenIcon size={22} />
                                )}
                            </span>
                        </>
                    )
                }

               <span onClick={handleDeleteTask} className='ml-auto inline-block cursor-pointer'>
                 <TrashIcon size={22} />
               </span>
            </div>
        </li>
    )
}

export default TodoItem
  