import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';
const App = () => {
  const [items, setItems] = useState([]);
   const handleItems = (newTask) =>{
    setItems([...items, newTask]);
   }
  return (
    <div>
      <h1>Task List</h1>
      <TaskInput  handleItems = {handleItems}/>
      <TaskList  items = {items}/>
    </div>
  )
}

export default App
