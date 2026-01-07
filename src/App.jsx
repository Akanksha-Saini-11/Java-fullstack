import { useState } from 'react'

import './App.css'



function App() {
  const [task, setTask] = useState("");
   const [tasks, setTasks] = useState([]);
   
  const addTask =()=>{
    if (task.trim() === "") return; 
    setTasks([...tasks,task]);
    setTask("");
  } 

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>    
  )
}

export default App
