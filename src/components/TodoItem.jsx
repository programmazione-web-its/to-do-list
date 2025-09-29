function TodoItem({ task }) {
    const { id, text, status } = task

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
        <li className="bg-gray-200 py-2 px-3 rounded-md my-3" id={id}>
            <span className={`inline-block w-[12px] h-[12px] rounded-full mr-2 ${getStatus()}`}></span>
            {text}
        </li>
    )
}

export default TodoItem



