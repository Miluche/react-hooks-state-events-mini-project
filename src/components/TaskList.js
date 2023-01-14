import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [currentTasks, setCurrentTasks] = useState(tasks);

  function removeTask(text) {
    setCurrentTasks(currentTasks.filter((task) => {
      return task.text !== text;
    }));
    return;
  }


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {currentTasks.map((task) => {
        return <Task text={task.text} category={task.category} removeTask={removeTask} />
      })}
    </div>
  );
}

export default TaskList;
