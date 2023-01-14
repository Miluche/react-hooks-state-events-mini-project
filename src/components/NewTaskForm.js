import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  function changeDetails(evt) {
    setDetails(evt.target.value);
    return;
  }

  function changeCategory(evt) {
    setselectedCategory(evt.target.value);
    return;
  }

  return (
    <form className="new-task-form" onSubmit={(evt) => {
      evt.preventDefault();
      onTaskFormSubmit({ text: details, category: selectedCategory });
    }}>
      <label>
        Details
        <input type="text" name="text" onChange={changeDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={changeCategory}>
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => {
            if (category !== "All") {
              return <option value={category} key={index}>{category}</option>
            } else {
              return <option key={index} disabled>Select category</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
