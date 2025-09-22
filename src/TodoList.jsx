import TodoItem from "./TodoItem";
import { PlusIcon } from "@phosphor-icons/react";

function TodoList({ tasks }) {
    function handleClick(e) {
        console.log("clicked", e.target)
    }
    return (
        <>
            <ul>
                {tasks.map((task) => <TodoItem key={task.id} task={task} />)}
            </ul>
            <button
                onClick={handleClick}
             className="bg-cyan-700 p-2 rounded-md text-white flex items-center justify-center gap-2"><PlusIcon size={24} />Aggiungi task</button>
        </>
    )
}

export default TodoList