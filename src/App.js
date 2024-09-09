import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
const App = () => {
  const [items, setItems] = useState([]);
   const handleItems = (newTask) =>{
    setItems([...items, newTask]);
   }
  return (
    <div>
      <h1>Task List</h1>
      <TaskInput  handleItems = {handleItems}/>

      <ul>
        {items.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
