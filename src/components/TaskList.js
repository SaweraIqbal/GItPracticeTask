import React from 'react';

const TaskList = ({ items, deleteItem }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center justify-between p-2 mb-2 border border-gray-200 rounded-lg bg-white shadow-sm"
          >
            <span className="flex-1">{item}</span>
            <button 
              onClick={() => deleteItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
