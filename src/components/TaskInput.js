import { useState } from "react"

const TaskInput = ({handleItems}) => {
    const [task, setTask] = useState('');
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if(task.trim() !== ""){
            handleItems(task);
            setTask('');
        }
    }
  return (
    <form onSubmit={handleTaskSubmit}>
      <input 
      type="text"
      value={task}
      onChange={(e) =>setTask(e.target.value)}
      placeholder="Enter Task"/>
      <button type="submit">Add New Task</button>
    </form>
  )
}

export default TaskInput
