import React, {useState} from 'react'
import './TaskList.css'

const TaskList = ({taskList, deleteTask, saveTask}) => {
  const [showEdit, setShowEdit] = useState(false)
  const [title, setTitle] = useState()
  const [taskId, settaskID] = useState()


  const editTask = (id, taskName) =>{
    settaskID(id);
    setTitle(taskName);
    setShowEdit(true)
  }

  return (
    <div className='taskList'>
        {taskList.map((task)=>{
             if (showEdit && task.id===taskId){
              return(
                <div className='editTask' key={task.id}>
               <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
               <button onClick={()=>saveTask(taskId, title, setShowEdit(false))}>Save Task</button>
              </div> 
              )
             } else {
              return(
                <div className='taskList' key={task.id}>
                     <p>{task.taskName}</p>
                     <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
                     <button onClick={()=>{editTask(task.id, task.taskName)}}>Edit</button>
                </div>
              )
             }
        })}
    </div>
  )
}

export default TaskList;