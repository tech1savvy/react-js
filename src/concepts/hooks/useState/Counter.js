import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // useEffect hook to log the count value whenever it changes
  useEffect(() => {
    console.log(`Count value has changed to: ${count}`);
  }, [count]); // Dependency array: runs when `count` changes

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
