import React, { useMemo, useState } from "react";

function ExpensiveComputation() {
  const [number, setNumber] = useState(0);

  // This is an expensive calculation that takes time
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2; // Just an example, but imagine this being more complex.
  };

  // Memoize the result of expensiveCalculation
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>Expensive Calculation with useMemo</h1>
      <p>Number: {number}</p>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveComputation;
