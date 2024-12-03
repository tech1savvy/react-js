import React from "react";

const DisplayArray = () => {
  const items = ["item-1", "item-2", "item-3"];

  return (
    <div>
      <h1>Array Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArray;
