import React from "react";
import Task from "./Task";

function TaskList({ tasks, setCurrentTasks }) {

  function removeTask(text) {
    setCurrentTasks(tasks.filter((task) => {
      return task.text !== text;
    }));
    return;
  }


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => {
        return <Task key={task.text} text={task.text} category={task.category} removeTask={removeTask} />
      })}
    </div>
  );
}

export default TaskList;
