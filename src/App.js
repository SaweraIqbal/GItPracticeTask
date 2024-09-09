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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <TaskInput  handleItems = {handleItems}/>
      <TaskList  items = {items} deleteItem = {DeleteItem}/>
    </div>
  </div>
  )
}

export default App
