import React, { useState, useEffect } from "react";

function CountdownTimer() {
  // State to keep track of the time left
  const [timeLeft, setTimeLeft] = useState(30); // Start the countdown from 30 seconds
  const [isActive, setIsActive] = useState(false); // Flag to track if the timer is running

  // useEffect to handle the countdown logic
  useEffect(() => {
    // If the timer is active and there is still time left
    if (isActive && timeLeft > 0) {
      // Set up an interval to run every 1 second (1000 milliseconds)
      const interval = setInterval(() => {
        // Decrease the timeLeft by 1 second
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // This will repeat every second

      // When the timer reaches 0, we stop the timer (clear the interval)
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      // If the time is 0, stop the timer by setting isActive to false
      setIsActive(false);
    }
  }, [isActive, timeLeft]); // This effect depends on 'isActive' and 'timeLeft'

  // Function to start/pause the timer
  const toggleTimer = () => {
    setIsActive((prevState) => !prevState); // Toggle the timer state
  };

  // Function to reset the timer to its initial value
  const resetTimer = () => {
    setTimeLeft(30); // Reset to 30 seconds
    setIsActive(false); // Stop the timer
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        {/* Display the time left in seconds */}
        <h3>{timeLeft} seconds</h3>
      </div>
      <div>
        {/* Button to start/pause the timer */}
        <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        {/* Button to reset the timer */}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default CountdownTimer;
