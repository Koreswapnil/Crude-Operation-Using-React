import React, { useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import TaskList from './components/TaskList';

function App() {
  const [todoList, settodoList] = useState([])

  const handleAddTask = (taskName) =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: taskName
    };
    settodoList([...todoList, task]);
  }

  const handleDelete = (id) =>{
    settodoList(todoList.filter((task)=> id !== task.id))
  }

  const handleSaveTask = (id, title) =>{
    settodoList(todoList.map((task)=>{
      if(id===task.id){
        return{...task, taskName:title}
    }
    return task
    }))
    }
    
  return (
    <div className="container">
      <Addtask handleClick={handleAddTask}/>
      <TaskList taskList={todoList} deleteTask={handleDelete} saveTask={handleSaveTask}/>
    </div>
  );
}

export default App;
