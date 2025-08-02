import { useSelector } from "react-redux"

const TaskList = () => {
    const {items}=useSelector(state=>state.tasks);
    console.log(items,"items")
  return (
 <>
    
 </>
  )
}

export default TaskList
