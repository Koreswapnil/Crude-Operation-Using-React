import React, {useState} from 'react'
import './Addtask.css'

const Addtask = ({handleClick}) => {
    const [taskName, settaskName] = useState()
    
    const handleChange = (e) =>{
        settaskName(e.target.value)
    }

    const handleTask = () =>{
        handleClick(taskName);
        // settaskName('')
    }

  return (
    <div>
        <input type='text' placeholder='Enter Task' value={taskName} onChange={handleChange} />
        <button onClick={handleTask}>Add Task</button>
    </div>
  )
}

export default Addtask