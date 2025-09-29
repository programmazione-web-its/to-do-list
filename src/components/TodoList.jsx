import { useState } from "react";

import TodoItem from "./TodoItem";
import Button from "./Button";
import { PlusIcon } from "@phosphor-icons/react";

function TodoList({ tasks }) {
 const [index, setIndex] = useState(0)
 const [tasksArray,setTasksArray] = useState(tasks)

    function handleClick(i) {
        console.log("Sto cliccando a inidice " +  i)
        setIndex(i)
       

    }

    // const tasksDone = tasks.filter(task => task.status === 'done')
    // const tasksToDo = tasks.filter(task => task.status !== 'done')
    // const tasksArray = [tasksDone, tasksToDo]

    function handleAddTask() {
        setTasksArray((prevTaskArray) => [...prevTaskArray,{
            id: new Date(),
            text: 'Sono una nuova task',
            status: 'pending'
     } ])

        console.log("Add new task")
    }

    return (
        <>
        <div className="flex items-center gap-2">
             <Button onBtnClick={()=> handleClick(0)}>Completate</Button>
             <Button onBtnClick={()=> handleClick(1)}>Da fare</Button>
        </div>
            <ul>
                {
                   tasksArray.map(task => <TodoItem key={task.id} task={task} />)
                }
  
              
            </ul>
           <Button onBtnClick={handleAddTask}>Aggiungi una nuova task</Button>
        </>
    )
}

export default TodoList