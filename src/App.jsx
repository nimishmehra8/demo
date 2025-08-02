// import { useState } from 'react'

import './App.css'
import AddTasks from './Components/AddTasks'
import TaskList from './Components/TaskList'



function App() {
  
  // const [count, setCount] = useState(0)
  return (
    <>
    <h1>Task Manager</h1>
  <AddTasks/>
  <TaskList/>
 
     
    </>
  )
}

export default App
