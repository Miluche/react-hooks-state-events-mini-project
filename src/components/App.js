import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [currentTasks, setCurrentTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCurrentTasks={setCurrentTasks} tasks={TASKS} />
      <NewTaskForm />
      <TaskList tasks={currentTasks} setCurrentTasks={setCurrentTasks} />
    </div>
  );
}

export default App;
