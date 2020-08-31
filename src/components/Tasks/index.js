import React, { useState } from "react";
import Task from "../Task";

function Tasks() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    if (inputValue != "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
      <ul className="taskContainer">
        {tasks.map((name, key) => {
          return <Task name={name} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default Tasks;
