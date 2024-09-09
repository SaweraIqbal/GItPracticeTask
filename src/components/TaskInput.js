import { useState } from "react";

const TaskInput = ({ handleItems }) => {
    const [task, setTask] = useState('');

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            handleItems(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleTaskSubmit} className="flex items-center gap-2">
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
                type="submit"
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
            >
                Add New Task
            </button>
        </form>
    );
};

export default TaskInput;
