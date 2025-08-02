import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import './task.css';

const AddTasks = () => {

    const [text, settext] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {

           dispatch(addTask(text))
            settext('')
        }

    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="add a task" value={text} onChange={(e) => { settext(e.target.value) }} className="input" />
            <button type="submit" className="button">Add Task</button>
        </form>
    )
}

export default AddTasks;