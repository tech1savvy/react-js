import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Memoize the increment function, depending on the 'count' state
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]); // Now it depends on the 'count' state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
