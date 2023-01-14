import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [isSelected, setIsSelected] = useState("All");

  function selectCategory(category) {
    setIsSelected(category);
    return;
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return <button className={isSelected === category ? "selected" : ""} key={index} onClick={() => {
          selectCategory(category);
          return
        }}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
