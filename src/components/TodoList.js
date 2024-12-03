import React, { useState, useEffect } from "react";

const TodoList = () => {
  // State to hold the to-do list items
  const [items, setItems] = useState([]);
  // State to hold the current input value
  const [input, setInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle adding a new item to the to-do list
  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput(""); // Clear input state after adding
    }
  };

  // Handle removing an item from the to-do list
  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  // Effect hook for logging when component mounts
  useEffect(() => {
    console.log("TodoList component mounted");

    // Cleanup effect for logging when component unmounts
    return () => {
      console.log("TodoList component unmounted");
    };
  }, []); // Empty dependency array ensures this runs only once (on mount and unmount)

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input field to type new item */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddItem}>Add Item</button>

      {/* List of tasks */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
