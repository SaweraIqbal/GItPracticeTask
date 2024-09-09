import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';
const App = () => {
  const [items, setItems] = useState([]);
   const handleItems = (newTask) =>{
    setItems([...items, newTask]);
   }
   const DeleteItem = (index) => {
        setItems(items.filter((_, i) => i !==index));
   }
  return (
    <div>
      <h1>Task List</h1>
      <TaskInput  handleItems = {handleItems}/>
      <TaskList  items = {items} DeleteItem = {DeleteItem}/>
    </div>
  )
}

export default App
