import React, { useState } from "react";




function NewItem(props) {
    const [name, setName] = useState("");
    const [newDate,setNewDate]=useState("")

    function handleChange(e) {
        setName(e.target.value);
        getAddTime();
    }
    function getAddTime(){
        var currentdate = new Date();
            var datetime = "Created At: " + currentdate.getDay() + "/" + currentdate.getMonth() 
            + "/" + currentdate.getFullYear() + " @ " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            setNewDate(datetime); 
            console.log(newDate)     
    }
    function handleSubmit(e) {
        e.preventDefault();

        if(name !==""){
            props.addTask(name,newDate);
            setName("");
        }
        
    }
  return (
    <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
    </form>
        
        
    );
  }
  

  export default NewItem;