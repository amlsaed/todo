import React, { useState } from "react";
import { nanoid } from "nanoid";

import TodoItem from "./todoItem";
import NewItem from "./addNew";
import FilterBtn from "./filterBtns";
import  './todostyle.css';


const DATA = [
    
  ];

  const FILTER_MAP = {
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
    All: () => true,
  };

function TodoList(){
    const [tasks, setTasks] = useState(DATA);
    const [filter, setFilter] = useState('Active');
   
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    

    const taskList = tasks
            .filter(FILTER_MAP[filter])
            .map((task) => (
            <TodoItem
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
                createdAt={task.newDate}
                edited={task.edited}
            />
            ));

    function addTask(name,newDate) {
                const newTask = { id: `todo-${nanoid()}`, name, completed: false,newDate:newDate,edited:""};
        setTasks([...tasks, newTask]);
      }

      const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
      const headingText = `${taskList.length} ${tasksNoun} remaining`;


      function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
          if (id === task.id) {
            return {...task, completed: !task.completed}
          }
          return task;
        });
        setTasks(updatedTasks);
      }

      

      function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
      }

      function editTask(id, newName,editTime) {
        const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
          if (id === task.id) {
            //
            return {...task, name: newName,edited:editTime}
          }
          return task;
        });
        setTasks(editedTaskList);
      }

      const filterList = FILTER_NAMES.map((name) => (
        <FilterBtn
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={setFilter}
        />
      ));


    return(
        <div className="todoapp stack-large">
        <h1>Todo App</h1>
         {/* add new */}
         <NewItem addTask={addTask}/>
         {/* Task manager */}
         
        
            <div className="filters btn-group stack-exception">

                    {filterList}
            </div>
            <h2 id="list-heading">
                    {headingText}
            </h2>
        
         {/* list of tasks */}
         <ul 
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
         >
                   

            {taskList}
         </ul>
       
        </div>
    )
}

export default TodoList;