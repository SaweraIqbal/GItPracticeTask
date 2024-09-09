const TaskList = ({items, DeleteItem}) => {
  return (
    <div>
       <ul>
        {items.map((item, index)=>(
          <li key={index}>{item}
          <button onClick={()=>DeleteItem(index)} >Delete </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
