import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [allTasks, setAllTasks] = useState(TASKS);
  const [currentTasks, setCurrentTasks] = useState(allTasks);

  function handleAddTask(task) {
    if (task.text.length > 0 && task.category.length > 0) {
      setAllTasks([...allTasks, task]);
      return;
    } else {
      return;
    }
  }

  useEffect(() => {
    setCurrentTasks(allTasks);
  }, [allTasks])

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCurrentTasks={setCurrentTasks} tasks={allTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={currentTasks} setCurrentTasks={setCurrentTasks} />
    </div>
  );
}

export default App;
